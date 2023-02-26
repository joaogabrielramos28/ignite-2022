import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatisticsParamType } from "../../@types/navigation";
import { StatisticsLayout } from "./layout";

export function Statistics() {
  const { goBack } = useNavigation();

  const { params } = useRoute();

  const { statistics } = params as StatisticsParamType;
  return <StatisticsLayout {...statistics} onBack={goBack} />;
}
