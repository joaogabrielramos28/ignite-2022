import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { MealLayout } from "./layout";

export function Meal() {
  const { goBack, navigate } = useNavigation();
  const goToFeedback = () => {
    navigate(StackRoutesEnum.FEEDBACK);
  };
  return (
    <MealLayout onGoBack={goBack} onGoToFeedback={goToFeedback}></MealLayout>
  );
}
