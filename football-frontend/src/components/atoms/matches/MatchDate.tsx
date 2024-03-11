import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface MatchDateProps {
  date: string;
  time: string;
}

const MatchDate = ({ date, time }: MatchDateProps) => {
  return (
    <View>
      <Text variant="titleMedium" style={styles.matchTime}>
        {time}
      </Text>
      <Text variant="labelMedium" style={styles.matchDate}>
        {date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  matchTime: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff2c84",
  },
  matchDate: {
    textAlign: "center",
    color: "black",
    opacity: 0.4,
  },
});

export default MatchDate;
