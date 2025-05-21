import { Collections } from "@/lib/generatedApi";
import { AppButton } from "../app-button";
import { AppText } from "../app-text";

export type CollectionListItemProps = {
  viewableIndex: number;
  collection: Collections;
};

export const CollectionListItem = ({ collection }: CollectionListItemProps) => {
  return (
    <AppButton color="primary">
      <AppText>{collection.name}</AppText>
    </AppButton>
  );
};
