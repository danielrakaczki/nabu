import { BottomSheetBackdrop, type BottomSheetBackdropProps, BottomSheetModal, type BottomSheetModalProps, BottomSheetView } from "@gorhom/bottom-sheet";
import { type BottomSheetViewProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types";
import { PropsWithChildren, useCallback } from "react";
import { Keyboard, Platform, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type AppBottomSheetModalProps = PropsWithChildren<
  BottomSheetModalProps & {
    ref: React.RefObject<BottomSheetModal | null>;
    bottomSheetViewStyle?: BottomSheetViewProps["style"];
  }
>;

export const AppBottomSheetModal = ({ ref, children, bottomSheetViewStyle, ...props }: AppBottomSheetModalProps) => {
  const { top, bottom } = useSafeAreaInsets();
  const paddingBottom = Platform.OS === "ios" ? bottom : bottom + 24;

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />, []);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      enableDynamicSizing
      enableBlurKeyboardOnGesture
      keyboardBlurBehavior="restore"
      keyboardBehavior="interactive"
      backdropComponent={renderBackdrop}
      topInset={top + 24}
      backgroundStyle={{ borderRadius: 48 }}
      {...props}
    >
      <GestureDetector gesture={Gesture.Pan().onStart(Keyboard.dismiss)}>
        <BottomSheetView style={[styles.contentContainer, { paddingBottom }, bottomSheetViewStyle]}>{children}</BottomSheetView>
      </GestureDetector>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    gap: 8,
    padding: 24,
    paddingTop: 12,
    flex: 1,
    alignItems: "stretch",
  },
});
