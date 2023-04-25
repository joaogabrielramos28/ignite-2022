import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
