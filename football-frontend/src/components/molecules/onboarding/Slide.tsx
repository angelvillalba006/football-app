import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Image from "../../atoms/onboarding/Image";
import Title from "../../atoms/onboarding/Title";
import Description from "../../atoms/onboarding/Description";

interface OnboardingItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
}

/**
 * Renders an individual item in the onboarding screen.
 * @param {Object} item - The item to be rendered.
 * @returns {JSX.Element} - The rendered onboarding item.
 */
const OnboardingSlide = ({ item }: OnboardingItemProps) => {
  const { width } = useWindowDimensions(); // Get the width of the window

  return (
    <View style={[styles.container, { width }]}>
      <Image source={{ uri: item.image }} />
      <View style={{ flex: 0.3 }}>
        <Title text={item.title} />
        <Description text={item.description} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingSlide;
