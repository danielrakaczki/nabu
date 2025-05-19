import { AppScrollView } from "@/components/app-scroll-view";
import { StyleSheet } from "react-native";

export default function Settings() {
  return <AppScrollView style={styles.container} contentContainerStyle={styles.contentContainer}></AppScrollView>;
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
