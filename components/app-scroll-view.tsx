import { ScrollView, type ScrollViewProps } from "react-native";

export type AppScrollViewProps = ScrollViewProps & {
  ref?: React.Ref<ScrollView>;
};

export const AppScrollView = ({ children, ...props }: AppScrollViewProps) => {
  return <ScrollView {...props}>{children}</ScrollView>;
};
