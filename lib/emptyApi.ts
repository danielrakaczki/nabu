import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/rest/v1/`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;

      headers.set("Accept", "application/json");
      headers.set("apiKey", `${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`);
      headers.set("Authorization", `Bearer ${state.auth.session?.access_token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
