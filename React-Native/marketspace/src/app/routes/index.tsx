import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { useTheme } from "native-base";

export const AppRoutes = () => {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];

  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
  );
};
