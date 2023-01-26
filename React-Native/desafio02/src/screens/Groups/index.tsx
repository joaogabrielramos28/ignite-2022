import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Groups = () => {
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
