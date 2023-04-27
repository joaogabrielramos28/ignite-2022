import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { StatusBar, useTheme } from "native-base";
import { useAuth } from "@hooks/network/useAuth";
import { AppRoutes } from "./app.routes";
import { Loading } from "@components/Loading";

export const Routes = () => {
  const { colors } = useTheme();
  const { user, loadingUserData } = useAuth();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];

  if (loadingUserData) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle="dark-content"
        networkActivityIndicatorVisible
        translucent
      />
      {!!user?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
