import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";

interface FetchErrorProps {
  message: string; // The error message to display
}

// This component is used to display an error message when fetching data fails
const FetchError = ({ message }: FetchErrorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          {/* Display an icon */}
          <Icon source="alert-circle" color="#656575" size={40} />
          {/* Display the error message */}
          <Text variant="titleMedium" style={styles.message}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingRight: 25,
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    height: 120,
    marginLeft: 25,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginTop: 5,
    color: "#656575",
  },
});

export default FetchError;
