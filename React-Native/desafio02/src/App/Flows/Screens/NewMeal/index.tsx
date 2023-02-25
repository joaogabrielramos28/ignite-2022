import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NewMealLayout } from "./layout";

export function NewMeal() {
  const { goBack } = useNavigation();
  return <NewMealLayout onGoBack={goBack}></NewMealLayout>;
}
