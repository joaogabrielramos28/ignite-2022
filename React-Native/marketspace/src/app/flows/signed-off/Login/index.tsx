import React from "react";
import { LoginLayout } from "./layout";

import { useAuth } from "@hooks/network/useAuth";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Screens } from "@routes/screens";

export const Login = () => {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { login } = useAuth();

  const handleGoToRegister = () => {
    navigate(Screens.REGISTER);
  };

  return (
    <LoginLayout handleLogin={login} handleGoToRegister={handleGoToRegister} />
  );
};
