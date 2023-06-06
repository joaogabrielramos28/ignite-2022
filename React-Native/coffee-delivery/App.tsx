import { ThemeProvider } from "styled-components/native";
import { Catalog } from "./src/screens/Catalog";
import { theme } from "./src/theme";

import { useFonts } from "expo-font";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Loading } from "./src/components/Loading";

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
      <Catalog />
    </ThemeProvider>
  );
}
