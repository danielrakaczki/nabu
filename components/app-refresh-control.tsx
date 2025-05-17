import { RefreshControl, type RefreshControlProps } from "react-native";

export type AppRefreshControlProps = RefreshControlProps & {
  ref?: React.Ref<RefreshControl>;
};

export const AppRefreshControl = ({
  children,
  ...props
}: AppRefreshControlProps) => {
  return <RefreshControl {...props}>{children}</RefreshControl>;
};
