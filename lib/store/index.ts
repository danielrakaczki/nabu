import { configureStore } from "@reduxjs/toolkit";
import { generatedApi } from "../generatedApi";
import { authSlice } from "./auth-slice";

export const store = configureStore({
  reducer: {
    // [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    [generatedApi.reducerPath]: generatedApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      // emptySplitApi.middleware,
      generatedApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
