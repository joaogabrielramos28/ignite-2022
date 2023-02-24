import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import { theme } from "./src/App/Flows/styles/theme";
import { AppRoutes } from "./src/App/routes";

import { useFonts } from "expo-font";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

export default function App() {
  const [isLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!isLoaded) {
    return <Text>Carregando...</Text>;
  }
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
