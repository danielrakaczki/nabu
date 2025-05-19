import { AUTH_SCOPES } from "@/constants/auth";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { supabase } from "../supabase";

export function useAuthNativeGoogle() {
  const [isGoogleSignInLoading, setIsSignInLoading] = useState(false);

  GoogleSignin.configure({
    scopes: AUTH_SCOPES,
    webClientId: process.env.EXPO_PUBLIC_OAUTH_WEB_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_OAUTH_IOS_CLIENT_ID,
  });

  const signIn = async () => {
    setIsSignInLoading(true);
    try {
      // const hasPlayServices = await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo.type === "success" && userInfo.data.idToken) {
        const response = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken,
        });
        if (response.error) {
          throw response.error;
        }
        return Promise.resolve(response.data);
      } else {
        throw new Error("no ID token present!");
      }
    } catch (error: any) {
      console.error("useAuthNativeGoogle - signIn", error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        return Promise.reject("SIGN_IN_CANCELLED");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        return Promise.reject("IN_PROGRESS");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        return Promise.reject("PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        // some other error happened
        return Promise.reject("UNKNOWN_ERROR");
      }
    } finally {
      setIsSignInLoading(false);
    }
  };

  return {
    signIn,
    isGoogleSignInLoading,
  };
}
