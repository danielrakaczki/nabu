import { AppSafeAreaView } from "@/components/app-safe-area-view";
import { AppText } from "@/components/app-text";
import { NativeAppleButton } from "@/components/sign-in/native-apple-button";
import { NativeGoogleButton } from "@/components/sign-in/native-google-button";
import { useAppSelector } from "@/lib/hooks";
import { useAuthWeb } from "@/lib/hooks/use-auth-web";
import { Redirect, useRouter } from "expo-router";
import { maybeCompleteAuthSession } from "expo-web-browser";
import { ScrollView, StyleSheet, View } from "react-native";

maybeCompleteAuthSession();

export default function SignInPage() {
  const session = useAppSelector((state) => state.auth.session);
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const { signInWithApple, signInWithGoogle } = useAuthWeb();

  if (session) {
    return <Redirect href={canGoBack ? "../" : "/"} />;
  }

  return (
    <View style={styles.mainContainer}>
      <AppSafeAreaView style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <AppText onPress={signInWithGoogle}>Sign in with google</AppText>
          <AppText onPress={signInWithApple}>Sign in with apple</AppText>
          <NativeGoogleButton />
          <NativeAppleButton />
        </ScrollView>
      </AppSafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
