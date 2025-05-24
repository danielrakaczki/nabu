import { Collections, useDeleteCollectionsMutation } from "@/lib/generatedApi";
import { Alert } from "react-native";
import { AppButton } from "../app-button";
import { AppText } from "../app-text";

export type CollectionListItemProps = {
  viewableIndex: number;
  collection: Collections;
};

export const CollectionListItem = ({ collection }: CollectionListItemProps) => {
  const [deleteCollection, { isLoading }] = useDeleteCollectionsMutation();
  console.log("CollectionListItem", collection);

  const onDelete = () => {
    Alert.alert("Delete collection", "Are you sure you want to delete this collection?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
        isPreferred: true,
      },
      {
        text: "Delete",
        onPress: () => {
          deleteCollection({ id: collection.id })
            .unwrap()
            .then((res) => {
              console.log("Deleted collection", res);
            })
            .catch((err) => {
              console.log("Error deleting collection", err);
            });
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <AppButton color="primary" onLongPress={onDelete}>
      <AppText>{isLoading ? "Deleting..." : collection.name}</AppText>
    </AppButton>
  );
};
