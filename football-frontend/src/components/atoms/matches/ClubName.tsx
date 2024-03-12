import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface ClubNameProps {
  name: string;
}

const ClubName = ({ name }: ClubNameProps) => {
  return (
    <View>
      <Text variant="titleMedium" style={styles.clubName}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clubName: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff2c84",
    paddingHorizontal: 5,
  },
});

export default ClubName;
