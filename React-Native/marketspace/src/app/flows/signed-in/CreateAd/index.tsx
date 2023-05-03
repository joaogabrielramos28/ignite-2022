import React from "react";
import { CreateAdLayout } from "./layout";
import { useNavigation } from "@react-navigation/native";

export const CreateAd = () => {
  const { goBack } = useNavigation();
  return <CreateAdLayout goBack={goBack} />;
};
