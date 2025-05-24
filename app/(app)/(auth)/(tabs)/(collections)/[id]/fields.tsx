import { AppScrollView } from "@/components/app-scroll-view";
import { AppText } from "@/components/app-text";
import { useGetFieldsQuery } from "@/lib/generatedApi";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function CollectionDetailsFieldsScreen() {
  const { id } = useLocalSearchParams();
  const { data: existingFields, isLoading } = useGetFieldsQuery({ collectionId: id as string });
  const hasNoData = !existingFields || existingFields.length === 0;

  return (
    <>
      <Stack.Screen options={{ title: `Fields of ${id}` }} />
      <AppScrollView style={styles.container}>
        {hasNoData && !isLoading && <AppText>No fields found for this collection.</AppText>}
        {isLoading && <AppText>Loading fields...</AppText>}
        {existingFields?.map((field) => <AppText key={field.id}>{JSON.stringify(field, undefined, 3)}</AppText>)}
      </AppScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
