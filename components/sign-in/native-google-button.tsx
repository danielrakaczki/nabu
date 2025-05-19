import { useAuthNativeGoogle } from "@/lib/hooks/use-auth-native-google";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { AppText } from "../app-text";

export const NativeGoogleButton = () => {
  const { signIn, isGoogleSignInLoading } = useAuthNativeGoogle();

  return (
    <>
      <GoogleSigninButton size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Dark} onPress={signIn} />
      {isGoogleSignInLoading && <AppText>isGoogleSignInLoading</AppText>}
    </>
  );
};
