import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Start } from "../Flows/Screens/Start";
import { Statistics } from "../Flows/Screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export enum StackRoutesEnum {
  START = "Start",
  STATISTICS = "Statistics",
}

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={StackRoutesEnum.START} component={Start} />
      <Screen name={StackRoutesEnum.STATISTICS} component={Statistics} />
    </Navigator>
  );
};
