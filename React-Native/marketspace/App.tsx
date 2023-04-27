import React from "react";
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla";
import { useFonts } from "expo-font";
import { Loading } from "@components/Loading";
import { AppProvider } from "@providers/index";
import { Register } from "@flows/signed-off/Register";

export default function App() {
  const [isLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return <AppProvider>{isLoaded ? <Register /> : <Loading />}</AppProvider>;
}
