import { generatedApi } from "./generated-api";

export const generatedApiEnhanced = generatedApi.enhanceEndpoints({
  addTagTypes: ["Collections"],
  endpoints: {
    getCollections: {
      providesTags(result, error, arg, meta) {
        if (result?.length) {
          return [...result.map(({ id }) => ({ type: "Collections" as const, id })), "Collections"];
        }
        return ["Collections"];
      },
    },
    postCollections: {
      invalidatesTags: ["Collections"],
    },
    patchCollections: {
      invalidatesTags(result, error, arg, meta) {
        return [{ type: "Collections", id: arg.id }];
      },
    },
    deleteCollections: {
      invalidatesTags: ["Collections"],
    },
  },
});
