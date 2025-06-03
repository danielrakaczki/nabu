import { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { memo } from "react";

export const AppBottomSheetBackdrop = memo((props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />);
AppBottomSheetBackdrop.displayName = "AppBottomSheetBackdrop";
