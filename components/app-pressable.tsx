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

  onLongPress?: () => void;
};

export const AppPressable = ({ onPressIn, onPressOut, onPress, onLongPress, style, shouldRemovePressStyle, children, ...props }: AppPressableProps) => {
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
  const handleLongPress = () => {
    console.log("Long press");
    onLongPress && runOnJS(onLongPress)();
  };

  const tapGesture = Gesture.Tap().onBegin(handlePressIn).onFinalize(handlePressOut).onStart(handlePress);
  const longPressGesture = Gesture.LongPress().onStart(handleLongPress).onFinalize(handlePressOut);
  const gesture = Gesture.Race(longPressGesture, tapGesture);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[shouldRemovePressStyle ? undefined : pressStyle, style]} {...props}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
