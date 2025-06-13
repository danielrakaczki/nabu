import { BottomSheetBackdrop, type BottomSheetBackdropProps, BottomSheetModal, type BottomSheetModalProps, BottomSheetView } from "@gorhom/bottom-sheet";
import { type BottomSheetViewProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types";
import { type PropsWithChildren, useCallback } from "react";
import { Platform, StyleSheet } from "react-native";
import { KeyboardGestureArea } from "react-native-keyboard-controller";
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
      enableDynamicSizing
      enableBlurKeyboardOnGesture
      keyboardBlurBehavior="restore"
      keyboardBehavior="interactive"
      backdropComponent={renderBackdrop}
      topInset={top + 24}
      backgroundStyle={{ borderRadius: 48 }}
      {...props}
    >
      <KeyboardGestureArea interpolator="ios">
        <BottomSheetView style={StyleSheet.flatten([styles.contentContainer, { paddingBottom }, bottomSheetViewStyle])}>{children}</BottomSheetView>
      </KeyboardGestureArea>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 8,
    padding: 24,
    paddingTop: 12,
    flex: 1,
    alignItems: "stretch",
  },
});
