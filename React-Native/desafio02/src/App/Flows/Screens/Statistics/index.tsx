import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatisticsLayout } from "./layout";

export function Statistics() {
  const { goBack } = useNavigation();
  return <StatisticsLayout onBack={goBack} />;
}
