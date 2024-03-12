import React, { useRef, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome6";

/**
 * Renders an onboarding button with a circular progress indicator.
 * @param {Object} props - The component props.
 * @param {number} props.percentage - The percentage of progress to display.
 * @param {Function} props.scrollTo - The function to scroll to a specific position.
 * @returns {JSX.Element} The rendered component.
 */
const OnboardingButton = ({ percentage, scrollTo }: any) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  // Animation function to animate the progress indicator
  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    // Trigger the animation when the percentage prop changes
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value: { value: number }) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        // Update the strokeDashoffset of the progress indicator
        (progressRef.current as any).setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      // Clean up the progressAnimation listener
      progressAnimation.removeAllListeners();
    };
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          {/* Background circle */}
          <Circle
            stroke="#e6e7e8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress indicator circle */}
          <Circle
            ref={progressRef}
            stroke="#f4338f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 60) / 100}
            fill="transparent"
          />
        </G>
      </Svg>
      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={scrollTo}
      >
        <Icon name="arrow-right" size={42} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 72,
    height: 72,
    position: "absolute",
    backgroundColor: "#f4338f",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingButton; // src/atoms/OnboardingButton.tsx
