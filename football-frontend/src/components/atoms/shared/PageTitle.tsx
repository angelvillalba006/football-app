import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <View>
      <Text variant="headlineSmall" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default PageTitle;
