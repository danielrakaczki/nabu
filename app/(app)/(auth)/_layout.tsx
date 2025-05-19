import { useAppSelector } from "@/lib/hooks";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const session = useAppSelector((state) => state.auth.session);

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
