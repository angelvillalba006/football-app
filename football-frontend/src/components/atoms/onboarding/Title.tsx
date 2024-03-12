import React from "react";
import { Text, StyleSheet } from "react-native";

interface TitleProps {
  text: string;
}
/**
 * Renders a title component for onboarding.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text source.
 * @returns {JSX.Element} The rendered title component.
 */
const OnboardingTitle = ({ text }: TitleProps) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
});

export default OnboardingTitle;
