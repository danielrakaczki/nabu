import { emptySplitApi as api } from "./empty-api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    $get: build.query<$getApiResponse, $getApiArg>({
      query: () => ({ url: `/` }),
    }),
    getCollections: build.query<
      GetCollectionsApiResponse,
      GetCollectionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collections`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          owner_id: queryArg.ownerId,
          name: queryArg.name,
          description: queryArg.description,
          cover_image_url: queryArg.coverImageUrl,
          is_public: queryArg.isPublic,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postCollections: build.mutation<
      PostCollectionsApiResponse,
      PostCollectionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collections`,
        method: "POST",
        body: queryArg.collections,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteCollections: build.mutation<
      DeleteCollectionsApiResponse,
      DeleteCollectionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collections`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          owner_id: queryArg.ownerId,
          name: queryArg.name,
          description: queryArg.description,
          cover_image_url: queryArg.coverImageUrl,
          is_public: queryArg.isPublic,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    patchCollections: build.mutation<
      PatchCollectionsApiResponse,
      PatchCollectionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collections`,
        method: "PATCH",
        body: queryArg.collections,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          owner_id: queryArg.ownerId,
          name: queryArg.name,
          description: queryArg.description,
          cover_image_url: queryArg.coverImageUrl,
          is_public: queryArg.isPublic,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    getProfiles: build.query<GetProfilesApiResponse, GetProfilesApiArg>({
      query: (queryArg) => ({
        url: `/profiles`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          name: queryArg.name,
          description: queryArg.description,
          profile_picture_url: queryArg.profilePictureUrl,
          language: queryArg.language,
          timezone: queryArg.timezone,
          updated_at: queryArg.updatedAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postProfiles: build.mutation<PostProfilesApiResponse, PostProfilesApiArg>({
      query: (queryArg) => ({
        url: `/profiles`,
        method: "POST",
        body: queryArg.profiles,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteProfiles: build.mutation<
      DeleteProfilesApiResponse,
      DeleteProfilesApiArg
    >({
      query: (queryArg) => ({
        url: `/profiles`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          name: queryArg.name,
          description: queryArg.description,
          profile_picture_url: queryArg.profilePictureUrl,
          language: queryArg.language,
          timezone: queryArg.timezone,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    patchProfiles: build.mutation<
      PatchProfilesApiResponse,
      PatchProfilesApiArg
    >({
      query: (queryArg) => ({
        url: `/profiles`,
        method: "PATCH",
        body: queryArg.profiles,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          name: queryArg.name,
          description: queryArg.description,
          profile_picture_url: queryArg.profilePictureUrl,
          language: queryArg.language,
          timezone: queryArg.timezone,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    getWidgets: build.query<GetWidgetsApiResponse, GetWidgetsApiArg>({
      query: (queryArg) => ({
        url: `/widgets`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          type: queryArg["type"],
          config: queryArg.config,
          created_by: queryArg.createdBy,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postWidgets: build.mutation<PostWidgetsApiResponse, PostWidgetsApiArg>({
      query: (queryArg) => ({
        url: `/widgets`,
        method: "POST",
        body: queryArg.widgets,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteWidgets: build.mutation<
      DeleteWidgetsApiResponse,
      DeleteWidgetsApiArg
    >({
      query: (queryArg) => ({
        url: `/widgets`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          type: queryArg["type"],
          config: queryArg.config,
          created_by: queryArg.createdBy,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    patchWidgets: build.mutation<PatchWidgetsApiResponse, PatchWidgetsApiArg>({
      query: (queryArg) => ({
        url: `/widgets`,
        method: "PATCH",
        body: queryArg.widgets,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          type: queryArg["type"],
          config: queryArg.config,
          created_by: queryArg.createdBy,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    getCollectionHistory: build.query<
      GetCollectionHistoryApiResponse,
      GetCollectionHistoryApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_history`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          user_id: queryArg.userId,
          action: queryArg.action,
          target_type: queryArg.targetType,
          target_id: queryArg.targetId,
          field_id: queryArg.fieldId,
          previous_value: queryArg.previousValue,
          new_value: queryArg.newValue,
          created_at: queryArg.createdAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postCollectionHistory: build.mutation<
      PostCollectionHistoryApiResponse,
      PostCollectionHistoryApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_history`,
        method: "POST",
        body: queryArg.collectionHistory,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteCollectionHistory: build.mutation<
      DeleteCollectionHistoryApiResponse,
      DeleteCollectionHistoryApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_history`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          user_id: queryArg.userId,
          action: queryArg.action,
          target_type: queryArg.targetType,
          target_id: queryArg.targetId,
          field_id: queryArg.fieldId,
          previous_value: queryArg.previousValue,
          new_value: queryArg.newValue,
          created_at: queryArg.createdAt,
        },
      }),
    }),
    patchCollectionHistory: build.mutation<
      PatchCollectionHistoryApiResponse,
      PatchCollectionHistoryApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_history`,
        method: "PATCH",
        body: queryArg.collectionHistory,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          user_id: queryArg.userId,
          action: queryArg.action,
          target_type: queryArg.targetType,
          target_id: queryArg.targetId,
          field_id: queryArg.fieldId,
          previous_value: queryArg.previousValue,
          new_value: queryArg.newValue,
          created_at: queryArg.createdAt,
        },
      }),
    }),
    getRows: build.query<GetRowsApiResponse, GetRowsApiArg>({
      query: (queryArg) => ({
        url: `/rows`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          values: queryArg.values,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postRows: build.mutation<PostRowsApiResponse, PostRowsApiArg>({
      query: (queryArg) => ({
        url: `/rows`,
        method: "POST",
        body: queryArg.rows,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteRows: build.mutation<DeleteRowsApiResponse, DeleteRowsApiArg>({
      query: (queryArg) => ({
        url: `/rows`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          values: queryArg.values,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    patchRows: build.mutation<PatchRowsApiResponse, PatchRowsApiArg>({
      query: (queryArg) => ({
        url: `/rows`,
        method: "PATCH",
        body: queryArg.rows,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          values: queryArg.values,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    getFieldTypes: build.query<GetFieldTypesApiResponse, GetFieldTypesApiArg>({
      query: (queryArg) => ({
        url: `/field_types`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          i18n_key: queryArg.i18NKey,
          description_key: queryArg.descriptionKey,
          icon: queryArg.icon,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postFieldTypes: build.mutation<
      PostFieldTypesApiResponse,
      PostFieldTypesApiArg
    >({
      query: (queryArg) => ({
        url: `/field_types`,
        method: "POST",
        body: queryArg.fieldTypes,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteFieldTypes: build.mutation<
      DeleteFieldTypesApiResponse,
      DeleteFieldTypesApiArg
    >({
      query: (queryArg) => ({
        url: `/field_types`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          i18n_key: queryArg.i18NKey,
          description_key: queryArg.descriptionKey,
          icon: queryArg.icon,
        },
      }),
    }),
    patchFieldTypes: build.mutation<
      PatchFieldTypesApiResponse,
      PatchFieldTypesApiArg
    >({
      query: (queryArg) => ({
        url: `/field_types`,
        method: "PATCH",
        body: queryArg.fieldTypes,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          i18n_key: queryArg.i18NKey,
          description_key: queryArg.descriptionKey,
          icon: queryArg.icon,
        },
      }),
    }),
    getFields: build.query<GetFieldsApiResponse, GetFieldsApiArg>({
      query: (queryArg) => ({
        url: `/fields`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          name: queryArg.name,
          type_id: queryArg.typeId,
          position: queryArg.position,
          is_encrypted: queryArg.isEncrypted,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postFields: build.mutation<PostFieldsApiResponse, PostFieldsApiArg>({
      query: (queryArg) => ({
        url: `/fields`,
        method: "POST",
        body: queryArg.fields,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteFields: build.mutation<DeleteFieldsApiResponse, DeleteFieldsApiArg>({
      query: (queryArg) => ({
        url: `/fields`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          name: queryArg.name,
          type_id: queryArg.typeId,
          position: queryArg.position,
          is_encrypted: queryArg.isEncrypted,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    patchFields: build.mutation<PatchFieldsApiResponse, PatchFieldsApiArg>({
      query: (queryArg) => ({
        url: `/fields`,
        method: "PATCH",
        body: queryArg.fields,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          name: queryArg.name,
          type_id: queryArg.typeId,
          position: queryArg.position,
          is_encrypted: queryArg.isEncrypted,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    getCollectionUserPermissions: build.query<
      GetCollectionUserPermissionsApiResponse,
      GetCollectionUserPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_user_permissions`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          user_id: queryArg.userId,
          role: queryArg.role,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postCollectionUserPermissions: build.mutation<
      PostCollectionUserPermissionsApiResponse,
      PostCollectionUserPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_user_permissions`,
        method: "POST",
        body: queryArg.collectionUserPermissions,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deleteCollectionUserPermissions: build.mutation<
      DeleteCollectionUserPermissionsApiResponse,
      DeleteCollectionUserPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_user_permissions`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          user_id: queryArg.userId,
          role: queryArg.role,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
    patchCollectionUserPermissions: build.mutation<
      PatchCollectionUserPermissionsApiResponse,
      PatchCollectionUserPermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/collection_user_permissions`,
        method: "PATCH",
        body: queryArg.collectionUserPermissions,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          collection_id: queryArg.collectionId,
          user_id: queryArg.userId,
          role: queryArg.role,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type $getApiResponse = unknown;
export type $getApiArg = void;
export type GetCollectionsApiResponse = /** status 200 OK */ Collections[];
export type GetCollectionsApiArg = {
  id?: string;
  ownerId?: string;
  name?: string;
  description?: string;
  coverImageUrl?: string;
  isPublic?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostCollectionsApiResponse = unknown;
export type PostCollectionsApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** collections */
  collections: Collections;
};
export type DeleteCollectionsApiResponse = unknown;
export type DeleteCollectionsApiArg = {
  id?: string;
  ownerId?: string;
  name?: string;
  description?: string;
  coverImageUrl?: string;
  isPublic?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchCollectionsApiResponse = unknown;
export type PatchCollectionsApiArg = {
  id?: string;
  ownerId?: string;
  name?: string;
  description?: string;
  coverImageUrl?: string;
  isPublic?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** collections */
  collections: Collections;
};
export type GetProfilesApiResponse = /** status 200 OK */ Profiles[];
export type GetProfilesApiArg = {
  id?: string;
  name?: string;
  description?: string;
  profilePictureUrl?: string;
  language?: string;
  timezone?: string;
  updatedAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostProfilesApiResponse = unknown;
export type PostProfilesApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** profiles */
  profiles: Profiles;
};
export type DeleteProfilesApiResponse = unknown;
export type DeleteProfilesApiArg = {
  id?: string;
  name?: string;
  description?: string;
  profilePictureUrl?: string;
  language?: string;
  timezone?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchProfilesApiResponse = unknown;
export type PatchProfilesApiArg = {
  id?: string;
  name?: string;
  description?: string;
  profilePictureUrl?: string;
  language?: string;
  timezone?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** profiles */
  profiles: Profiles;
};
export type GetWidgetsApiResponse = /** status 200 OK */ Widgets[];
export type GetWidgetsApiArg = {
  id?: string;
  collectionId?: string;
  type?: string;
  config?: string;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostWidgetsApiResponse = unknown;
export type PostWidgetsApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** widgets */
  widgets: Widgets;
};
export type DeleteWidgetsApiResponse = unknown;
export type DeleteWidgetsApiArg = {
  id?: string;
  collectionId?: string;
  type?: string;
  config?: string;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchWidgetsApiResponse = unknown;
export type PatchWidgetsApiArg = {
  id?: string;
  collectionId?: string;
  type?: string;
  config?: string;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** widgets */
  widgets: Widgets;
};
export type GetCollectionHistoryApiResponse =
  /** status 200 OK */ CollectionHistory[];
export type GetCollectionHistoryApiArg = {
  id?: string;
  collectionId?: string;
  userId?: string;
  action?: string;
  targetType?: string;
  targetId?: string;
  fieldId?: string;
  previousValue?: string;
  newValue?: string;
  createdAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostCollectionHistoryApiResponse = unknown;
export type PostCollectionHistoryApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** collection_history */
  collectionHistory: CollectionHistory;
};
export type DeleteCollectionHistoryApiResponse = unknown;
export type DeleteCollectionHistoryApiArg = {
  id?: string;
  collectionId?: string;
  userId?: string;
  action?: string;
  targetType?: string;
  targetId?: string;
  fieldId?: string;
  previousValue?: string;
  newValue?: string;
  createdAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchCollectionHistoryApiResponse = unknown;
export type PatchCollectionHistoryApiArg = {
  id?: string;
  collectionId?: string;
  userId?: string;
  action?: string;
  targetType?: string;
  targetId?: string;
  fieldId?: string;
  previousValue?: string;
  newValue?: string;
  createdAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** collection_history */
  collectionHistory: CollectionHistory;
};
export type GetRowsApiResponse = /** status 200 OK */ Rows[];
export type GetRowsApiArg = {
  id?: string;
  collectionId?: string;
  values?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostRowsApiResponse = unknown;
export type PostRowsApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** rows */
  rows: Rows;
};
export type DeleteRowsApiResponse = unknown;
export type DeleteRowsApiArg = {
  id?: string;
  collectionId?: string;
  values?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchRowsApiResponse = unknown;
export type PatchRowsApiArg = {
  id?: string;
  collectionId?: string;
  values?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** rows */
  rows: Rows;
};
export type GetFieldTypesApiResponse = /** status 200 OK */ FieldTypes[];
export type GetFieldTypesApiArg = {
  id?: string;
  i18NKey?: string;
  descriptionKey?: string;
  icon?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostFieldTypesApiResponse = unknown;
export type PostFieldTypesApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** field_types */
  fieldTypes: FieldTypes;
};
export type DeleteFieldTypesApiResponse = unknown;
export type DeleteFieldTypesApiArg = {
  id?: string;
  i18NKey?: string;
  descriptionKey?: string;
  icon?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchFieldTypesApiResponse = unknown;
export type PatchFieldTypesApiArg = {
  id?: string;
  i18NKey?: string;
  descriptionKey?: string;
  icon?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** field_types */
  fieldTypes: FieldTypes;
};
export type GetFieldsApiResponse = /** status 200 OK */ Fields[];
export type GetFieldsApiArg = {
  id?: string;
  collectionId?: string;
  name?: string;
  typeId?: string;
  position?: string;
  isEncrypted?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostFieldsApiResponse = unknown;
export type PostFieldsApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** fields */
  fields: Fields;
};
export type DeleteFieldsApiResponse = unknown;
export type DeleteFieldsApiArg = {
  id?: string;
  collectionId?: string;
  name?: string;
  typeId?: string;
  position?: string;
  isEncrypted?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchFieldsApiResponse = unknown;
export type PatchFieldsApiArg = {
  id?: string;
  collectionId?: string;
  name?: string;
  typeId?: string;
  position?: string;
  isEncrypted?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** fields */
  fields: Fields;
};
export type GetCollectionUserPermissionsApiResponse =
  /** status 200 OK */ CollectionUserPermissions[];
export type GetCollectionUserPermissionsApiArg = {
  id?: string;
  collectionId?: string;
  userId?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostCollectionUserPermissionsApiResponse = unknown;
export type PostCollectionUserPermissionsApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** collection_user_permissions */
  collectionUserPermissions: CollectionUserPermissions;
};
export type DeleteCollectionUserPermissionsApiResponse = unknown;
export type DeleteCollectionUserPermissionsApiArg = {
  id?: string;
  collectionId?: string;
  userId?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchCollectionUserPermissionsApiResponse = unknown;
export type PatchCollectionUserPermissionsApiArg = {
  id?: string;
  collectionId?: string;
  userId?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** collection_user_permissions */
  collectionUserPermissions: CollectionUserPermissions;
};
export type Collections = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  owner_id: string;
  name: string;
  description?: string;
  cover_image_url?: string;
  is_public?: boolean;
  created_at?: string;
  updated_at?: string;
};
export type Profiles = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  name?: string;
  description?: string;
  profile_picture_url?: string;
  language?: string;
  timezone?: string;
  updated_at?: string;
};
export type Widgets = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  /** Note:
    This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/> */
  collection_id: string;
  type: string;
  config: any;
  created_by: string;
  created_at?: string;
  updated_at?: string;
};
export type CollectionHistory = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  /** Note:
    This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/> */
  collection_id: string;
  user_id: string;
  action: string;
  target_type: string;
  target_id?: string;
  field_id?: string;
  previous_value?: any;
  new_value?: any;
  created_at?: string;
};
export type Rows = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  /** Note:
    This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/> */
  collection_id: string;
  values: any;
  created_at?: string;
  updated_at?: string;
};
export type FieldTypes = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  i18n_key: string;
  description_key?: string;
  icon?: string;
};
export type Fields = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  /** Note:
    This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/> */
  collection_id: string;
  name: string;
  /** Note:
    This is a Foreign Key to `field_types.id`.<fk table='field_types' column='id'/> */
  type_id: string;
  position?: number;
  is_encrypted?: boolean;
  created_at?: string;
  updated_at?: string;
};
export type CollectionUserPermissions = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: string;
  /** Note:
    This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/> */
  collection_id: string;
  user_id: string;
  role: string;
  created_at?: string;
  updated_at?: string;
};
export const {
  use$getQuery,
  useGetCollectionsQuery,
  usePostCollectionsMutation,
  useDeleteCollectionsMutation,
  usePatchCollectionsMutation,
  useGetProfilesQuery,
  usePostProfilesMutation,
  useDeleteProfilesMutation,
  usePatchProfilesMutation,
  useGetWidgetsQuery,
  usePostWidgetsMutation,
  useDeleteWidgetsMutation,
  usePatchWidgetsMutation,
  useGetCollectionHistoryQuery,
  usePostCollectionHistoryMutation,
  useDeleteCollectionHistoryMutation,
  usePatchCollectionHistoryMutation,
  useGetRowsQuery,
  usePostRowsMutation,
  useDeleteRowsMutation,
  usePatchRowsMutation,
  useGetFieldTypesQuery,
  usePostFieldTypesMutation,
  useDeleteFieldTypesMutation,
  usePatchFieldTypesMutation,
  useGetFieldsQuery,
  usePostFieldsMutation,
  useDeleteFieldsMutation,
  usePatchFieldsMutation,
  useGetCollectionUserPermissionsQuery,
  usePostCollectionUserPermissionsMutation,
  useDeleteCollectionUserPermissionsMutation,
  usePatchCollectionUserPermissionsMutation,
} = injectedRtkApi;
