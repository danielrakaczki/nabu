import { Text, type TextProps } from "react-native";

export const FONT_WEIGHTS = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export type AppTextProps = TextProps & {
  fontFamily?: "Inter" | "InterDisplay";
  fontWeight?:
    | keyof typeof FONT_WEIGHTS
    | (typeof FONT_WEIGHTS)[keyof typeof FONT_WEIGHTS];
  fontStyle?: "normal" | "italic";
  fontSize?: number;
  /**
   * @default fontSize * 1.25
   */
  lineHeight?: number;
};

export const AppText = ({
  fontFamily = "Inter",
  fontWeight: fw = "normal",
  fontStyle = "normal",
  fontSize = 16,
  lineHeight = fontSize * 1.25,
  style,
  children,
  ...props
}: AppTextProps) => {
  const fontWeight = typeof fw === "string" ? FONT_WEIGHTS[fw] : fw;

  return (
    <Text
      style={[{ fontFamily, fontWeight, fontStyle, lineHeight }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
