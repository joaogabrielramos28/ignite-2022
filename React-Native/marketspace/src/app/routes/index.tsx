import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { StatusBar, useTheme } from "native-base";
import { useAuth } from "@hooks/network/useAuth";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const { colors } = useTheme();
  const { user } = useAuth();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];

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
