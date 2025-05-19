import { expo } from "@/app.json";
import { AUTH_SCOPES } from "@/constants/auth";
import { makeRedirectUri } from "expo-auth-session";
import { getQueryParams } from "expo-auth-session/build/QueryParams";
import { openAuthSessionAsync } from "expo-web-browser";
import { useState } from "react";
import { supabase } from "../supabase";

const redirectUri = makeRedirectUri({
  scheme: expo.scheme,
});

export function useAuthWeb() {
  const [isSignInLoading, setIsSignInLoading] = useState(false);

  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = getQueryParams(url);
    if (errorCode) throw new Error(errorCode);
    const { access_token, refresh_token } = params;
    if (!access_token) return;
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    if (error) throw error;
    return data.session;
  };

  const signIn = async (provider: "google" | "apple") => {
    setIsSignInLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { scopes: AUTH_SCOPES.join(" "), redirectTo: redirectUri, skipBrowserRedirect: true },
    });
    if (error) {
      setIsSignInLoading(false);
      throw error;
    }

    const result = await openAuthSessionAsync(data.url, redirectUri);

    if (result.type === "success" && result.url) {
      const { url } = result;
      await createSessionFromUrl(url);
    }
    setIsSignInLoading(false);
  };

  const signInWithGoogle = () => {
    return signIn("google");
  };
  const signInWithApple = () => {
    return signIn("apple");
  };
  const __quickSignIn = async () => {
    if (__DEV__ && process.env.EXPO_PUBLIC_QUICK_SIGN_IN && process.env.EXPO_PUBLIC_DEV_EMAIL && process.env.EXPO_PUBLIC_DEV_PASSWORD) {
      console.log("Quick sign in enabled");
      return supabase.auth.signInWithPassword({ email: process.env.EXPO_PUBLIC_DEV_EMAIL, password: process.env.EXPO_PUBLIC_DEV_PASSWORD }).then(console.log);
    }
  };

  return {
    __quickSignIn,
    signInWithGoogle,
    signInWithApple,
    isSignInLoading,
  };
}
