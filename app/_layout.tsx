import { store } from "@/lib/store";
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Slot />
      </GestureHandlerRootView>
    </Provider>
  );
}
