import { AppSafeAreaView } from "@/components/app-safe-area-view";
import { AppText } from "@/components/app-text";
import { router } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function SignInPage() {
  const isAuthenticated = false; // Replace with actual authentication logic

  const navigateToHome = () => {
    router.replace("/");
  };

  if (isAuthenticated) navigateToHome();

  return (
    <AppSafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <AppText onPress={navigateToHome}>Sign in</AppText>
      </ScrollView>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
