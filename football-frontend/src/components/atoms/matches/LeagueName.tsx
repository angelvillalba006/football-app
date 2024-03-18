import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface LeagueProps {
  league: string;
  textColor?: string;
}

const LeagueName = ({ league, textColor = "white" }: LeagueProps) => {
  return (
    <View>
      <Text variant="titleMedium" style={[styles.league, { color: textColor }]}>
        {league}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  league: {
    textAlign: "center",
    fontSize: 12,
    opacity: 0.6,
    marginTop: -2,
  },
});

export default LeagueName;
