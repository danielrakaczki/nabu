import { EASINGS } from "@/constants/animation";
import { useCallback } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export type UsePressAnimationProps = {
  defaultScale?: number;
  minScale?: number;
};

export const usePressAnimation = ({ defaultScale = 1, minScale = 0.9 }: UsePressAnimationProps = {}) => {
  const pressed = useSharedValue(defaultScale);

  const pressIn = useCallback(() => {
    "worklet";
    pressed.value = withTiming(minScale, EASINGS.fastSpatial);
  }, []);

  const pressOut = useCallback(() => {
    "worklet";
    pressed.value = withTiming(defaultScale, EASINGS.fastSpatial);
  }, []);

  const pressStyle = useAnimatedStyle(() => ({ transform: [{ scale: pressed.value }] }));

  return {
    pressed,
    pressIn,
    pressOut,
    pressStyle,
  };
};
