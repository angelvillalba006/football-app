import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface LeagueProps {
  league: string;
}

const LeagueName = ({ league }: LeagueProps) => {
  return (
    <View>
      <Text variant="titleMedium" style={styles.league}>
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
    color: "white",
    marginTop: -2,
  },
});

export default LeagueName;
