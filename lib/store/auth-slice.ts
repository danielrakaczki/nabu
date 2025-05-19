import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";

export type AuthState = {
  session: Session | null;
  isInitialized: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    session: null,
    isInitialized: false,
  } as AuthState,
  reducers: {
    setSession: (_state, action: PayloadAction<Session | null>) => {
      return {
        isInitialized: true,
        session: action.payload,
      };
    },
  },
});

export const { setSession } = authSlice.actions;
