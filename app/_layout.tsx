import { store } from "@/lib/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <KeyboardProvider>
          <BottomSheetModalProvider>
            <Slot />
          </BottomSheetModalProvider>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
