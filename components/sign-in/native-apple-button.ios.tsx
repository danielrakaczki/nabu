import { useAuthNativeApple } from "@/lib/hooks/use-auth-native-apple";
import * as AppleAuthentication from "expo-apple-authentication";

export const NativeAppleButton = () => {
  const { signIn } = useAuthNativeApple();

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 64 }}
      onPress={signIn}
    />
  );
};
