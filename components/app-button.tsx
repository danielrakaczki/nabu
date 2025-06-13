import * as Haptics from "expo-haptics";
import { type PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { AppPressable, type AppPressableProps } from "./app-pressable";
import { AppText, type AppTextFontProps, type AppTextProps } from "./app-text";

export type AppButtonProps = PropsWithChildren<
  Partial<AppTextFontProps> &
    AppPressableProps & {
      textProps?: Omit<AppTextProps, keyof AppTextFontProps>;
      isDisabled?: boolean;
      color: "primary" | (string & {});
      radius?: number;
      height?: number;
      shouldRemoveBaseStyle?: boolean;
    }
>;

export const AppButton = ({
  fontFamily = "Inter",
  fontSize = 16,
  fontStyle = "normal",
  fontWeight = "semiBold",
  lineHeight = fontSize * 1.25,
  height = fontSize * 3,
  radius = fontSize,
  isDisabled,
  children,
  color,
  style,
  shouldRemoveBaseStyle,
  onPressIn,
  textProps,
  ...props
}: AppButtonProps) => {
  const baseStyle: AppPressableProps["style"] = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: fontSize,
    backgroundColor: "red",
    borderRadius: radius,
    height: height,
  };

  const handlePressIn = () => {
    if (isDisabled) {
      return;
    }

    if (process.env.EXPO_OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }

    if (onPressIn) {
      // @ts-ignore
      onPressIn(event);
    }
  };

  return (
    <AppPressable
      shouldRemovePressStyle={isDisabled}
      style={StyleSheet.flatten([shouldRemoveBaseStyle ? undefined : baseStyle, { pointerEvents: isDisabled ? "none" : "auto" }, style])}
      onPressIn={handlePressIn}
      {...props}
    >
      <AppText fontFamily={fontFamily} fontSize={fontSize} fontStyle={fontStyle} fontWeight={fontWeight} lineHeight={lineHeight} {...textProps}>
        {children}
      </AppText>
    </AppPressable>
  );
};
