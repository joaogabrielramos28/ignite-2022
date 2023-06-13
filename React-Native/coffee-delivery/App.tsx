import "react-native-gesture-handler";
import { theme } from "./src/theme";

import { useFonts } from "expo-font";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components";

import { Finish } from "./src/screens/Finish";
import { Routes } from "./src/routes";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_400Regular,
    Baloo2_700Bold,
  });

  if (!fontLoaded) {
    return <Loading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
