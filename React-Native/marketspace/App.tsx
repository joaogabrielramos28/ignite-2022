import React from "react";
import { NativeBaseProvider } from "native-base";
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla";
import { useFonts } from "expo-font";
import { theme } from "./src/app/theme";
import { Login } from "@flows/signed-off/Login";
import { Loading } from "@components/Loading";

export default function App() {
  const [isLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      {isLoaded ? <Login /> : <Loading />}
    </NativeBaseProvider>
  );
}
