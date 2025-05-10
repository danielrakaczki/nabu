import { useGetCollectionsQuery } from "@/lib/generatedApi";
import { RefreshControl, ScrollView, Text } from "react-native";

export default function Index() {
  const {
    data: collections,
    error,
    refetch,
    isFetching,
  } = useGetCollectionsQuery({});

  console.log("error", error);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={() => {
            refetch();
          }}
        />
      }
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      {/* {error && <Text style={{ color: 'red' }}>{error?.status}</Text>} */}
      {collections?.map((col) => (
        <Text key={col.id}>
          {col.name} ({col.is_public ? "public" : "private"})
        </Text>
      ))}
    </ScrollView>
  );
}
