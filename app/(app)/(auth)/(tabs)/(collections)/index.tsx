import { AppRefreshControl } from "@/components/app-refresh-control";
import { AppScrollView } from "@/components/app-scroll-view";
import { AppText } from "@/components/app-text";
import { CollectionListItem } from "@/components/collection/collection-list-item";
import { NewCollectionModal } from "@/components/collection/new-collection";
import { useGetCollectionsQuery } from "@/lib/generatedApi";
import { StyleSheet, View } from "react-native";

export default function CollectionsScreen() {
  const { data, refetch, isLoading, isUninitialized } = useGetCollectionsQuery({});
  const isEmpty = !isUninitialized && data?.length === 0;

  return (
    <AppScrollView
      refreshControl={<AppRefreshControl refreshing={isLoading} onRefresh={refetch} />}
      style={styles.container}
      contentContainerStyle={isEmpty ? { flex: 1 } : styles.contentContainer}
    >
      <NewCollectionModal />
      {(isEmpty || isUninitialized) && (
        <View style={{ marginTop: "auto" }}>
          <AppText>No collections found</AppText>
        </View>
      )}
      {data?.map((c) => <CollectionListItem key={c.id} collection={c} viewableIndex={0} />)}
    </AppScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
});
