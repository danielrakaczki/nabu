import { usePressAnimation } from "@/hooks/use-press-animation";
import { type ViewProps } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, type AnimatedProps } from "react-native-reanimated";

export type AppPressableProps = AnimatedProps<ViewProps> & {
  shouldRemovePressStyle?: boolean;
  style?: ViewProps["style"];

  onPressIn?: () => void;
  onPressOut?: () => void;
  onPress?: () => void;
};

export const AppPressable = ({ onPressIn, onPressOut, onPress, style, shouldRemovePressStyle, children, ...props }: AppPressableProps) => {
  const { pressStyle, pressIn, pressOut } = usePressAnimation();

  const handlePressIn = () => {
    pressIn();
    onPressIn && runOnJS(onPressIn)();
  };
  const handlePressOut = () => {
    pressOut();
    onPressOut && runOnJS(onPressOut)();
  };
  const handlePress = () => {
    onPress && runOnJS(onPress)();
  };

  const baseGesture = Gesture.Tap().onBegin(handlePressIn).onFinalize(handlePressOut).onStart(handlePress);

  return (
    <GestureDetector gesture={baseGesture}>
      <Animated.View style={[shouldRemovePressStyle ? undefined : pressStyle, style]} {...props}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
