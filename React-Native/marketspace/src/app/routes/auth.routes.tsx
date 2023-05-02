import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Login } from "@flows/signed-off/Login";
import { Screens } from "./screens";
import { Register } from "@flows/signed-off/Register";

const { Navigator, Screen } = createStackNavigator();

type AuthRoutes = {
  [Screens.LOGIN]: undefined;
  [Screens.REGISTER]: undefined;
};

export type AuthNavigatorRoutesProps = StackNavigationProp<AuthRoutes>;

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Screens.LOGIN} component={Login} />
      <Screen name={Screens.REGISTER} component={Register} />
    </Navigator>
  );
};
