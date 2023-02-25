import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Feedback } from "../Flows/Screens/Feedback";
import { Meal } from "../Flows/Screens/Meal";
import { NewMeal } from "../Flows/Screens/NewMeal";
import { Start } from "../Flows/Screens/Start";
import { Statistics } from "../Flows/Screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export enum StackRoutesEnum {
  START = "Start",
  STATISTICS = "Statistics",
  NEW_MEAL = "NewMeal",
  FEEDBACK = "Feedback",
  MEAL = "Meal",
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
      <Screen name={StackRoutesEnum.NEW_MEAL} component={NewMeal} />
      <Screen name={StackRoutesEnum.FEEDBACK} component={Feedback} />
      <Screen name={StackRoutesEnum.MEAL} component={Meal} />
    </Navigator>
  );
};
