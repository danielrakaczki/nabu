-- 0002_add_field_types_and_config.sql

-- 1) Add a config JSONB column to fields so each field can store its settings
ALTER TABLE fields
  ADD COLUMN config jsonb NOT NULL DEFAULT '{}';

-- 2) Insert new field types: number, rate, date
INSERT INTO field_types (id, i18n_key, description_key, icon)
VALUES
  ('number',   'field_type.number', 'field_type.number.desc', '🔢'),
  ('rate',     'field_type.rate',   'field_type.rate.desc',   '⭐'),
  ('date',     'field_type.date',   'field_type.date.desc',   '📅');

-- 3) (Optional) Migrate any existing fields to include default config structure
-- For 'number' fields no extra config needed.
-- For 'rate' and 'date', set sensible defaults for existing rows:
UPDATE fields
SET config = jsonb_build_object(
  'max', 5,
  'iconSelected', '⭐',
  'iconUnselected', '☆'
) WHERE type_id = 'rate';

UPDATE fields
SET config = jsonb_build_object(
  'includeTime', false,
  'timeZone', 'UTC'
) WHERE type_id = 'date';
