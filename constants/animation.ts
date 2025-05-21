import { Easing, WithTimingConfig } from "react-native-reanimated";

export const EASINGS = {
  fastSpatial: {
    duration: 350,
    easing: Easing.bezier(0.42, 1.67, 0.21, 0.9),
  },
  defaultSpatial: {
    duration: 500,
    easing: Easing.bezier(0.38, 1.21, 0.22, 1.0),
  },
  slowSpatial: {
    duration: 650,
    easing: Easing.bezier(0.39, 1.29, 0.35, 0.98),
  },
  fastEffects: {
    duration: 150,
    easing: Easing.bezier(0.31, 0.94, 0.34, 1.0),
  },
  defaultEffects: {
    duration: 200,
    easing: Easing.bezier(0.34, 0.8, 0.34, 1.0),
  },
  slowEffects: {
    duration: 300,
    easing: Easing.bezier(0.34, 0.88, 0.34, 1.0),
  },
} as const satisfies Record<string, WithTimingConfig>;
