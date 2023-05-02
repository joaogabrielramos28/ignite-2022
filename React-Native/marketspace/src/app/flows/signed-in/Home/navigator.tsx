import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { Home } from ".";
import { CreateAd } from "./CreateAd";
import { Screens } from "@routes/screens";

const { Screen, Navigator } = createStackNavigator();

type HomeNavigatorRoutes = {
  [Screens.HOME]: undefined;
  [Screens.CREATED_AD]: undefined;
};

export type HomeNavigatorRoutesProps = StackNavigationProp<HomeNavigatorRoutes>;

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name={Screens.HOME} component={Home} />
      <Screen name={Screens.CREATED_AD} component={CreateAd} />
    </Navigator>
  );
};
