import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSession } from "@/lib/store/auth-slice";
import { supabase } from "@/lib/supabase";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { AppState } from "react-native";

export default function AppLayout() {
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__DEV__ && process.env.EXPO_PUBLIC_QUICK_SIGN_IN && process.env.EXPO_PUBLIC_DEV_EMAIL && process.env.EXPO_PUBLIC_DEV_PASSWORD) {
      console.log("Quick sign in enabled");
      supabase.auth.signInWithPassword({ email: process.env.EXPO_PUBLIC_DEV_EMAIL, password: process.env.EXPO_PUBLIC_DEV_PASSWORD }).then(console.log).catch(console.error);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });

    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (isInitialized) {
    SplashScreen.hideAsync();
  }

  return <Slot />;
}
