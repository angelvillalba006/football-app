import React from "react";
import { Text, StyleSheet } from "react-native";

interface DescriptionProps {
  text: string;
}
/**
 * Renders a description component for onboarding.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The description source.
 * @returns {JSX.Element} The rendered description component.
 */
const OnboardingDescription = ({ text }: DescriptionProps) => {
  return <Text style={styles.description}>{text}</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});

export default OnboardingDescription;
