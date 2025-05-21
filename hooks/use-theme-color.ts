import { useColorScheme } from "@/hooks/use-color-scheme";

export function useThemeColor(props: { light?: string; dark?: string }) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  return colorFromProps;
}
