-- Enable required extensions
create extension if not exists "uuid-ossp";

-- 1. Profiles (extend auth.users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  description text,
  profile_picture_url text,
  language text default 'en' check (language in ('en','hu','es','de')),
  timezone text default 'Europe/Budapest',
  updated_at timestamptz default now()
);

-- 2. Field Types (i18n-aware)
create table field_types (
  id text primary key,
  i18n_key text not null,
  description_key text,
  icon text
);

insert into field_types (id, i18n_key, description_key, icon) values
('text', 'field_type.text', 'field_type.text.desc', '📝'),
('checkbox', 'field_type.checkbox', 'field_type.checkbox.desc', '✅'),
('image', 'field_type.image', 'field_type.image.desc', '🖼️'),
('color', 'field_type.color', 'field_type.color.desc', '🎨'),
('ai_image', 'field_type.ai_image', 'field_type.ai_image.desc', '🤖🖼️');

-- 3. Collections
create table collections (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text,
  cover_image_url text,
  is_public boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 4. Fields within Collections
create table fields (
  id uuid primary key default uuid_generate_v4(),
  collection_id uuid not null references collections(id) on delete cascade,
  name text not null,
  type_id text not null references field_types(id),
  position int default 0,
  is_encrypted boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 5. Rows (items)
create table rows (
  id uuid primary key default uuid_generate_v4(),
  collection_id uuid not null references collections(id) on delete cascade,
  values jsonb not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 6. Collection Permissions
create table collection_user_permissions (
  id uuid primary key default uuid_generate_v4(),
  collection_id uuid not null references collections(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('admin','editor','viewer','history_viewer')),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (collection_id, user_id)
);

-- 7. Widgets
create table widgets (
  id uuid primary key default uuid_generate_v4(),
  collection_id uuid not null references collections(id) on delete cascade,
  type text not null,
  config jsonb not null,
  created_by uuid not null references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 8. Collection History / Audit Trail
create table collection_history (
  id uuid primary key default uuid_generate_v4(),
  collection_id uuid not null references collections(id) on delete cascade,
  user_id uuid not null references auth.users(id),
  action text not null,
  target_type text not null,
  target_id uuid,
  field_id uuid,
  previous_value jsonb,
  new_value jsonb,
  created_at timestamptz default now()
);

-- Enable Row-Level Security and Policies

-- Profiles: user can select/update own profile
alter table profiles enable row level security;
create policy "Profiles: select own" on profiles for select using (auth.uid() = id);
create policy "Profiles: update own" on profiles for update using (auth.uid() = id);

-- Collections: owners and permitted users
alter table collections enable row level security;
create policy "Collections: select public or permitted" on collections for select using (
  is_public
  or owner_id = auth.uid()
  or exists (
    select 1 from collection_user_permissions p
    where p.collection_id = collections.id and p.user_id = auth.uid()
  )
);
create policy "Collections: insert own" on collections for insert with check (owner_id = auth.uid());
create policy "Collections: update owner or admin" on collections for update using (
  owner_id = auth.uid()
  or exists (
    select 1 from collection_user_permissions p
    where p.collection_id = collections.id and p.user_id = auth.uid() and p.role = 'admin'
  )
);
create policy "Collections: delete owner or admin" on collections for delete using (
  owner_id = auth.uid()
  or exists (
    select 1 from collection_user_permissions p
    where p.collection_id = collections.id and p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- Fields: only if user can update collection
alter table fields enable row level security;
create policy "Fields: select if can view collection" on fields for select using (
  exists (
    select 1 from collections c
    where c.id = fields.collection_id and (
      c.is_public
      or c.owner_id = auth.uid()
      or exists (
        select 1 from collection_user_permissions p
        where p.collection_id = c.id and p.user_id = auth.uid()
      )
    )
  )
);
create policy "Fields: insert/update/delete if admin" on fields for all using (
  exists (
    select 1 from collection_user_permissions p
    where p.collection_id = fields.collection_id and p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- Rows: similar to fields
alter table rows enable row level security;
create policy "Rows: select if can view collection" on rows for select using (
  exists (
    select 1 from collections c
    where c.id = rows.collection_id and (
      c.is_public
      or c.owner_id = auth.uid()
      or exists (
        select 1 from collection_user_permissions p
        where p.collection_id = c.id and p.user_id = auth.uid()
      )
    )
  )
);
create policy "Rows: insert/update/delete if editor+" on rows for all using (
  exists (
    select 1 from collection_user_permissions p
    where p.collection_id = rows.collection_id and p.user_id = auth.uid() and p.role in ('admin','editor')
  )
);

-- Widgets: select if can view, insert if editor+
alter table widgets enable row level security;
create policy "Widgets: select if can view" on widgets for select using (
  exists (
    select 1 from collections c
    where c.id = widgets.collection_id and (
      c.is_public or c.owner_id = auth.uid() or exists (
        select 1 from collection_user_permissions p
        where p.collection_id = c.id and p.user_id = auth.uid()
      )
    )
  )
);
create policy "Widgets: insert/update/delete if editor+" on widgets for all using (
  exists (
    select 1 from collection_user_permissions p
    where p.collection_id = widgets.collection_id and p.user_id = auth.uid() and p.role in ('admin','editor')
  )
);

-- History: select if history_viewer+
alter table collection_history enable row level security;
create policy "History: select if history_viewer+" on collection_history for select using (
  exists (
    select 1 from collection_user_permissions p
    where p.collection_id = collection_history.collection_id and p.user_id = auth.uid() and p.role in ('admin','editor','history_viewer')
  )
);
