import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const isAuthenticated = false; // Replace with your authentication logic

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
