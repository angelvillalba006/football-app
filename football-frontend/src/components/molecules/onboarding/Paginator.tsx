import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

interface PaginatorProps {
  data: any[];
  scrollX: any;
}

/**
 * Renders a paginator component.
 *
 * @param {PaginatorProps} props - The props for the Paginator component.
 * @param {Array<any>} props.data - The data to be rendered as dots in the paginator.
 * @param {Animated.Value} props.scrollX - The animated value representing the scroll position.
 * @returns {JSX.Element} The Paginator component.
 */
const Paginator = ({ data, scrollX }: PaginatorProps) => {
  const { width } = useWindowDimensions(); // Get the width of the window

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={[styles.dot, { width: dotWidth, opacity: opacity }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },
});

export default Paginator;
