import { FieldTypes, useGetFieldTypesQuery } from "@/lib/generatedApi";
import { useCallback, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppButton } from "../app-button";
import { AppText } from "../app-text";
import { AppBottomSheetModal } from "../bottom-sheet/app-bottom-sheet-modal";
import { useAppBottomSheetModal } from "../bottom-sheet/hooks/use-app-bottom-sheet-modal";

const padding = 24;
const gap = 16;

export const NewFieldModal = () => {
  const [selectedFieldType, setSelectedFieldType] = useState<FieldTypes>();
  const { bottomSheetModalRef, presentBottomSheetModal } = useAppBottomSheetModal();
  const { data } = useGetFieldTypesQuery({});

  const fieldTypeWidth = (Dimensions.get("window").width - padding * 2) / 2 - gap;

  const onBack = useCallback(() => {
    setSelectedFieldType(undefined);
  }, []);

  const onSelectFieldType = useCallback(
    (fieldType: FieldTypes) => () => {
      setSelectedFieldType(fieldType);
    },
    [bottomSheetModalRef],
  );

  return (
    <>
      <AppButton color="primary" onPress={presentBottomSheetModal}>
        New Field
      </AppButton>
      <AppBottomSheetModal ref={bottomSheetModalRef}>
        {selectedFieldType && (
          <AppText fontSize={16} fontWeight={"semiBold"} style={styles.back} onPress={onBack}>
            Back
          </AppText>
        )}
        <AppText fontWeight={"black"} fontFamily="InterDisplay" fontSize={24}>
          New field
        </AppText>
        <ScrollView style={styles.container} contentContainerStyle={styles.fieldTypesContainer}>
          {!selectedFieldType &&
            data?.map((f) => (
              <AppButton key={f.id} color="primary" style={[styles.fieldType, { width: fieldTypeWidth }]} onPress={onSelectFieldType(f)}>
                {f.icon}
              </AppButton>
            ))}
          {selectedFieldType && (
            <AppText fontSize={16} fontWeight={"semiBold"}>
              Selected field type: {selectedFieldType.i18n_key}
            </AppText>
          )}
        </ScrollView>
      </AppBottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    position: "absolute",
    left: padding,
    top: padding,
    zIndex: 1,
  },
  fieldTypesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: gap,
    paddingTop: padding,
  },
  fieldType: {},
});
