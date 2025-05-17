import { type NativeMethods } from "react-native";
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";
import { type NativeProps } from "react-native-safe-area-context/lib/typescript/src/specs/NativeSafeAreaView";

export type AppSafeAreaViewProps = SafeAreaViewProps & {
  ref?: React.Ref<
    React.Component<NativeProps, {}, any> & Readonly<NativeMethods>
  >;
};

export const AppSafeAreaView = ({
  children,
  ...props
}: AppSafeAreaViewProps) => {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
};
