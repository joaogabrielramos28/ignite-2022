import { StatusBar, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { Loading } from "@components/Loading";
import { theme } from "./src/theme";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={"light-content"}
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}
