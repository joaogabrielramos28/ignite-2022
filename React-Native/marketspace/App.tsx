import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla";
import { useFonts } from "expo-font";
import { theme } from "./src/app/theme";
import { Loading } from "@flows/components/Loading";

export default function App() {
  const [isLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      {isLoaded ? <></> : <Loading />}
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
