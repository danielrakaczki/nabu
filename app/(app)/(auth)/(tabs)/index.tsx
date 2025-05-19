import { AppRefreshControl } from "@/components/app-refresh-control";
import { AppScrollView } from "@/components/app-scroll-view";
import { AppText } from "@/components/app-text";
import { useGetCollectionsQuery } from "@/lib/generatedApi";
import { useLogout } from "@/lib/hooks/use-logout";
import { Button } from "react-native";

export default function Home() {
  const { data: collections, error, refetch, isFetching } = useGetCollectionsQuery({});
  const { logout } = useLogout();
  console.log("error", error);

  return (
    <AppScrollView
      style={{ flex: 1 }}
      refreshControl={
        <AppRefreshControl
          refreshing={isFetching}
          onRefresh={() => {
            refetch();
          }}
        />
      }
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <AppText>Title</AppText>
      <Button title="Logout" onPress={logout} />
      {/* {error && <Text style={{ color: 'red' }}>{error?.status}</Text>} */}
      {collections?.map((col) => (
        <AppText key={col.id}>
          {col.name} ({col.is_public ? "public" : "private"})
        </AppText>
      ))}
    </AppScrollView>
  );
}
