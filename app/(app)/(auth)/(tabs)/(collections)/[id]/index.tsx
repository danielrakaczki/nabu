import { AppButton } from "@/components/app-button";
import { AppScrollView } from "@/components/app-scroll-view";
import { AppText } from "@/components/app-text";
import { useGetCollectionsQuery } from "@/lib/generatedApi";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function CollectionDetails() {
  const { id } = useLocalSearchParams();
  const { data, isLoading } = useGetCollectionsQuery({ id: id as string });
  const router = useRouter();

  const navigateToFields = () => {
    router.push({ pathname: "/[id]/fields", params: { id: id as string } });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: `Details of ${id}`,
        }}
      />
      <AppScrollView style={styles.container}>
        {isLoading && <AppText>Loading...</AppText>}
        <AppText>{JSON.stringify(data, undefined, 3)}</AppText>
        <AppButton onPress={navigateToFields} color="primary">
          Go to Fields
        </AppButton>
      </AppScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
