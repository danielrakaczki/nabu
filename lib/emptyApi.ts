import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/rest/v1/`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
      );
      headers.set("Accept", "application/json");
      headers.set("apiKey", process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
