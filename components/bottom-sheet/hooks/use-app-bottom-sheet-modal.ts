import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export function useAppBottomSheetModal() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const presentBottomSheetModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const dismissBottomSheetModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return {
    bottomSheetModalRef,
    presentBottomSheetModal,
    dismissBottomSheetModal,
  };
}
