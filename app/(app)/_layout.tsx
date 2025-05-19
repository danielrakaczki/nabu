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
