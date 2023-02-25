import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./stack";

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
