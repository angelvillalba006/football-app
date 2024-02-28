import React from "react";
import { Image, StyleSheet, useWindowDimensions } from "react-native";

interface ImageProps {
  source: { uri: string };
}

/**
 * Renders an image component for onboarding.
 *
 * @param {Object} props - The component props.
 * @param {string} props.source - The image source.
 * @returns {JSX.Element} The rendered image component.
 */
const OnboardingImage = ({ source }: ImageProps) => {
  const { width } = useWindowDimensions(); // Get the width of the window
  return (
    <Image
      source={source}
      style={[styles.image, { width, resizeMode: "contain" }]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: "center",
    resizeMode: "contain",
  },
});

export default OnboardingImage;
