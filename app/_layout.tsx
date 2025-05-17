import { store } from "@/lib/store";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplashScreen();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Slot />
      </GestureHandlerRootView>
    </Provider>
  );
}
