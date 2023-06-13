import { Catalog } from "./src/screens/Catalog";
import { theme } from "./src/theme";

import { useFonts } from "expo-font";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components";
import { Coffee } from "./src/screens/Coffee";

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
      <Coffee />
    </ThemeProvider>
  );
}
