import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppButton } from "../app-button";

export const NewCollectionModal = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();

  // callbacks
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />, []);

  // renders
  return (
    <>
      <AppButton color="primary" onPress={handlePresentPress}>
        New collection
      </AppButton>
      <BottomSheetModal ref={bottomSheetRef} snapPoints={["25%", "75%"]} backdropComponent={renderBackdrop} enablePanDownToClose onChange={handleSheetChanges}>
        <BottomSheetView style={[styles.contentContainer, { paddingBottom: bottom }]}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </>
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
    flex: 1,
    alignItems: "center",
  },
});
