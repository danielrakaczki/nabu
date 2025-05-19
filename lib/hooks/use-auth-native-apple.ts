import * as AppleAuthentication from "expo-apple-authentication";
import { useState } from "react";
import { supabase } from "../supabase";

export function useAuthNativeApple() {
  const [isAppleSignInLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL],
      });

      if (credential.identityToken) {
        const {
          error,
          data: { user },
        } = await supabase.auth.signInWithIdToken({
          provider: "apple",
          token: credential.identityToken,
        });
        if (!error) {
          // User is signed in.
          return Promise.resolve(user);
        }
      } else {
        throw new Error("No identityToken.");
      }
    } catch (e: any) {
      console.error("useAuthNativeApple - signIn", e);
      // Error object type not defined, but it can return .code = "ERR_REQUEST_CANCELED"
      // https://docs.expo.dev/versions/latest/sdk/apple-authentication/
      if (e.code === "ERR_REQUEST_CANCELED") {
        // handle that the user canceled the sign-in flow
        return Promise.reject(e);
      } else {
        // handle other errors
        return Promise.reject(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signIn, isSignInLoading: isAppleSignInLoading };
}
