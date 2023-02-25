import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { StartLayout } from "./Layout";

export const Start = () => {
  const { navigate } = useNavigation();

  const goToStatistics = () => {
    navigate(StackRoutesEnum.STATISTICS);
  };

  const goToNewMeal = () => {
    navigate(StackRoutesEnum.NEW_MEAL);
  };
  return (
    <StartLayout onGoToStatics={goToStatistics} onGoToNewMeal={goToNewMeal} />
  );
};
