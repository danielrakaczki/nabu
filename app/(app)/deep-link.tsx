import { AppSafeAreaView } from "@/components/app-safe-area-view";
import { AppText } from "@/components/app-text";
import * as Linking from "expo-linking";

export default function TestDeepLink() {
  const url = Linking.useURL();

  return (
    <AppSafeAreaView>
      <AppText>URL: {url}</AppText>
    </AppSafeAreaView>
  );
}
