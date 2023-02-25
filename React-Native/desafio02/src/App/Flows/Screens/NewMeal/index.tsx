import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { NewMealLayout } from "./layout";

export function NewMeal() {
  const { goBack, navigate } = useNavigation();
  const goToFeedback = () => {
    navigate(StackRoutesEnum.FEEDBACK);
  };
  return (
    <NewMealLayout
      onGoBack={goBack}
      onGoToFeedback={goToFeedback}
    ></NewMealLayout>
  );
}
