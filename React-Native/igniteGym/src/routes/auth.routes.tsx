import { DefaultTheme } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { Box, useTheme } from "native-base";

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export const AuthRoutes = () => {
  const { colors } = useTheme();
  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="signIn" component={SignIn} />
        <Screen name="signUp" component={SignUp} />
      </Navigator>
    </Box>
  );
};
