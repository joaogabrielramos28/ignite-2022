import React from "react";
import { LoginLayout } from "./layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchemaValidation } from "./components/Validation/schema";
import { useAuth } from "@hooks/network/useAuth";

export const Login = () => {
  const { login } = useAuth();
  return <LoginLayout handleLogin={login} />;
};
