import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { FeedBackParamType, MealParamType } from "../../@types/navigation";
import { MealLayout } from "./layout";

export function Meal() {
  const { goBack, navigate } = useNavigation();
  const goToFeedback = () => {
    navigate(StackRoutesEnum.FEEDBACK);
  };

  const { params } = useRoute();

  const { meal } = params as MealParamType;

  return (
    <MealLayout
      item={meal}
      onGoBack={goBack}
      onGoToFeedback={goToFeedback}
    ></MealLayout>
  );
}
