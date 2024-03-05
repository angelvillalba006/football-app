import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface PageTitleProps {
  title: string;
}

const SectionTitle = ({ title }: PageTitleProps) => {
  return (
    <Text variant="titleLarge" style={styles.title}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 15,
  },
});

export default SectionTitle;
