import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface ResultProps {
  hometeam: number;
  awayteam: number;
  minutesPlayed: string;
  textColor?: string;
}

const GameResult = ({
  hometeam,
  awayteam,
  minutesPlayed,
  textColor = "white",
}: ResultProps) => {
  return (
    <View>
      <Text
        variant="displaySmall"
        style={[styles.result, { color: textColor }]}
      >
        {hometeam} : {awayteam}
      </Text>
      <View style={styles.minutesBox}>
        <Text style={[styles.minutesText, { color: textColor }]}>
          {minutesPlayed}′
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    fontWeight: "bold",
  },
  minutesBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "#ff2c84",
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "center",
  },
  minutesText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default GameResult;
