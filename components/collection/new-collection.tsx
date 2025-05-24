import { usePostCollectionsMutation } from "@/lib/generatedApi";
import { useAppSelector } from "@/lib/hooks";
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet";
import * as Crypto from "expo-crypto";
import { useCallback, useRef, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppButton } from "../app-button";
import { AppText } from "../app-text";

export const NewCollectionModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const owner_id = useAppSelector((state) => state.auth.session?.user.id);

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { top, bottom } = useSafeAreaInsets();
  const [postCollection, { isLoading }] = usePostCollectionsMutation();

  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    setName("");
    setDescription("");
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />, []);

  const onCreateCollection = () => {
    if (owner_id === undefined) return;
    const id = Crypto.randomUUID();
    const created_at = new Date().toISOString();

    if (!name.trim() || !description.trim()) {
      console.log("Name and description are required");
      return;
    }

    postCollection({ collections: { name, description, owner_id, id, is_public: false, created_at, updated_at: created_at } })
      .unwrap()
      .then((res) => {
        console.log("Created collection", res);
        handleClosePress();
      })
      .catch((err) => {
        console.log("Error creating collection", err);
      });
  };

  return (
    <>
      <AppButton color="primary" onPress={handlePresentPress}>
        New collection
      </AppButton>
      <BottomSheetModal
        ref={bottomSheetRef}
        enableDynamicSizing
        enableBlurKeyboardOnGesture
        keyboardBlurBehavior="restore"
        keyboardBehavior="interactive"
        backdropComponent={renderBackdrop}
        containerStyle={{ paddingTop: top }}
        topInset={top + 24}
        backgroundStyle={{ borderRadius: 48 }}
      >
        <GestureDetector gesture={Gesture.Pan().onStart(Keyboard.dismiss)}>
          <BottomSheetView style={[styles.contentContainer, { gap: 8, padding: 24, paddingTop: 12, paddingBottom: bottom, alignItems: "stretch" }]}>
            <AppText fontFamily="InterDisplay" fontSize={23} fontWeight="black" style={{ marginBottom: 16 }}>
              {isLoading ? "Loading..." : "New Collection"}
            </AppText>
            <BottomSheetTextInput
              placeholder="Collection name"
              value={name}
              onChangeText={setName}
              style={{ backgroundColor: "#f3f3f3", padding: 16, borderRadius: 16, marginBottom: 16 }}
            />
            <BottomSheetTextInput
              placeholder="Collection description"
              value={description}
              onChangeText={setDescription}
              style={{ backgroundColor: "#f3f3f3", padding: 16, borderRadius: 16, marginBottom: 16 }}
            />
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
              <AppButton color="tertiary" onPress={handleClosePress}>
                Cancel
              </AppButton>
              <AppButton color="primary" onPress={onCreateCollection}>
                Create collection
              </AppButton>
            </View>
          </BottomSheetView>
        </GestureDetector>
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
