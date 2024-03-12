import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

interface PageTitleProps {
  title: string;
  showButton?: boolean;
  buttonText?: string;
}

const SectionTitle = ({
  title,
  showButton = false,
  buttonText,
}: PageTitleProps) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        {title}
      </Text>
      {showButton && (
        <Button
          mode="text"
          buttonColor="transparent"
          rippleColor="transparent"
          textColor="#ff2c84"
          labelStyle={{ fontWeight: "600" }}
          onPress={() => console.log("Pressed")}
        >
          {buttonText} {/* Use the prop for button text */}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 15,
  },
  title: {
    fontWeight: "bold",
  },
});

export default SectionTitle;
