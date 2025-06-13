import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/rest/v1/`,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;

    headers.set("Accept", "application/json");
    headers.set("apiKey", `${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`);
    headers.set("Authorization", `Bearer ${state.auth.session?.access_token}`);
    return headers;
  },
});

const baseQuery: BaseQueryFn<{ url: string; method?: string; params?: Record<string, any> }, unknown, unknown> = async (args, api, extraOptions) => {
  if (args.params && typeof args.params.id === "string") {
    let raw = args.params.id as string;
    // if it already looks like eq.xxx, leave it alone
    if (!raw.startsWith("eq.")) {
      raw = `eq.${raw}`;
    }
    args = {
      ...args,
      params: { ...args.params, id: raw },
    };
  }
  return rawBaseQuery(args, api, extraOptions);
};

export const emptySplitApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
