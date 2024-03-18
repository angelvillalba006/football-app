import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MatchSraristicsCard = () => {
  return <View style={[styles.card]}></View>;
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 200,
    marginTop: 110,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "red",
    marginLeft: 15,
  },
});

export default MatchSraristicsCard;
