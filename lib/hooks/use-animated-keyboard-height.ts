import { useEffect } from "react";
import { Keyboard } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export function useAnimatedKeyboardHeight() {
  const keyboardHeight = useSharedValue(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", (event) => {
      keyboardHeight.value = event.endCoordinates.height;
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      keyboardHeight.value = 0;
    });
    const keyboardWillShowListener = Keyboard.addListener("keyboardWillShow", (event) => {
      keyboardHeight.value = event.endCoordinates.height;
    });
    const keyboardWillHideListener = Keyboard.addListener("keyboardWillHide", () => {
      keyboardHeight.value = 0;
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return { keyboardHeight };
}
