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

export type AppTextFontProps = {
  fontFamily?: "Inter" | "InterDisplay";
  fontWeight?: keyof typeof FONT_WEIGHTS | (typeof FONT_WEIGHTS)[keyof typeof FONT_WEIGHTS];
  fontStyle?: "normal" | "italic";
  fontSize?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  /**
   * @default fontSize * 1.25
   */
  lineHeight?: number;
};
export type AppTextProps = TextProps & AppTextFontProps;

export const AppText = ({
  fontFamily = "Inter",
  fontWeight: fw = "normal",
  fontStyle = "normal",
  fontSize = 16,
  textAlign = "auto",
  lineHeight = fontSize * 1.25,
  style,
  children,
  ...props
}: AppTextProps) => {
  const fontWeight = typeof fw === "string" ? FONT_WEIGHTS[fw] : fw;

  return (
    <Text style={[{ fontSize, fontFamily, fontWeight, fontStyle, lineHeight, textAlign }, style]} {...props}>
      {children}
    </Text>
  );
};
