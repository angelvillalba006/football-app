import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface MatchdayProps {
  matchday: number;
}

const Matchday = ({ matchday }: MatchdayProps) => {
  return (
    <View>
      <Text variant="titleMedium" style={styles.matchday}>
        Matchday {matchday}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  matchday: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    color: "white",
    marginTop: 8,
  },
});

export default Matchday;
