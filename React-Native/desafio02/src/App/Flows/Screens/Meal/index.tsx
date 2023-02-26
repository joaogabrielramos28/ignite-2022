import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { FeedBackParamType, MealParamType } from "../../@types/navigation";
import { deleteMeal } from "../../storage/Meals/deleteMeals";
import { MealLayout } from "./layout";

export function Meal() {
  const { goBack, dispatch, navigate } = useNavigation();

  const { params } = useRoute();

  const { meal } = params as MealParamType;

  const goToEditMeal = () => {
    navigate(StackRoutesEnum.EDIT_MEAL, { meal });
  };

  const onDeleteMeal = async (id: string, date: string) => {
    await deleteMeal(id, date);
    dispatch(StackActions.popToTop());
  };

  return (
    <MealLayout
      onDeleteMeal={onDeleteMeal}
      item={meal}
      onGoBack={goBack}
      onGoToEditMeal={goToEditMeal}
    ></MealLayout>
  );
}
