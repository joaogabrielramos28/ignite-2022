import { StatusBar, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#202024",
      }}
    >
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={"light-content"}
      />
      {fontsLoaded ? (
        <Text>Loading ...</Text>
      ) : (
        <Text>Open up App.tsx to start working on your app!</Text>
      )}
    </View>
  );
}
