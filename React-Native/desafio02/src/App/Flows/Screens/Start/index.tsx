import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StackRoutesEnum } from "../../../routes/stack";
import { StartLayout } from "./Layout";

export const Start = () => {
  const { navigate } = useNavigation();

  const goToStatistics = () => {
    navigate(StackRoutesEnum.STATISTICS);
  };
  return <StartLayout onGoToStatics={goToStatistics} />;
};
