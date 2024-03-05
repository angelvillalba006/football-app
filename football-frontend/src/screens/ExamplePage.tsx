import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExamplePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sample Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
});

// Export der Komponente für die Verwendung in anderen Dateien
export default ExamplePage;
