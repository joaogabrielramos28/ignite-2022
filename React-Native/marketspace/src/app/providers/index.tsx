import { AuthProvider } from "@hooks/network/useAuth";
import { theme } from "@theme/index";
import { NativeBaseProvider } from "native-base";
import React, { ReactNode } from "react";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </NativeBaseProvider>
  );
};
