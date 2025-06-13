import { configureStore } from "@reduxjs/toolkit";
import { generatedApiEnhanced } from "../generate-api-enhance";
import { authSlice } from "./auth-slice";

export const store = configureStore({
  reducer: {
    // [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    [generatedApiEnhanced.reducerPath]: generatedApiEnhanced.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      // emptySplitApi.middleware,
      generatedApiEnhanced.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
