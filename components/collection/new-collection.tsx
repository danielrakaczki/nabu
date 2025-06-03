import { usePostCollectionsMutation } from "@/lib/generatedApi";
import { useAppSelector } from "@/lib/hooks";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import * as Crypto from "expo-crypto";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppButton } from "../app-button";
import { AppText } from "../app-text";
import { AppBottomSheetModal } from "../bottom-sheet/app-bottom-sheet-modal";
import { useAppBottomSheetModal } from "../bottom-sheet/hooks/use-app-bottom-sheet-modal";

export const NewCollectionModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const owner_id = useAppSelector((state) => state.auth.session?.user.id);

  const { bottomSheetModalRef, presentBottomSheetModal, dismissBottomSheetModal } = useAppBottomSheetModal();
  const [postCollection, { isLoading }] = usePostCollectionsMutation();

  const handleClosePress = useCallback(() => {
    setName("");
    setDescription("");
    dismissBottomSheetModal();
  }, []);

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
      <AppButton color="primary" onPress={presentBottomSheetModal}>
        New collection
      </AppButton>
      <AppBottomSheetModal ref={bottomSheetModalRef}>
        <AppText fontFamily="InterDisplay" fontSize={23} fontWeight="black" style={{ marginBottom: 16 }}>
          {isLoading ? "Loading..." : "New Collection"}
        </AppText>
        <BottomSheetTextInput
          placeholder="Collection name"
          placeholderTextColor={"#888"}
          value={name}
          onChangeText={setName}
          style={{ backgroundColor: "#f3f3f3", padding: 16, borderRadius: 16, marginBottom: 16 }}
        />
        <BottomSheetTextInput
          placeholder="Collection description"
          placeholderTextColor={"#888"}
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
      </AppBottomSheetModal>
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
