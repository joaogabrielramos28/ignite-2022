import React from "react";
import { HomeLayout } from "./layout";
import { useAuth } from "@hooks/network/useAuth";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "@routes/screens";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export const Home = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const handleGoToCreateAd = () => {
    navigate(Screens.CREATED_AD);
  };
  return <HomeLayout user={user} handleGoToCreateAd={handleGoToCreateAd} />;
};
