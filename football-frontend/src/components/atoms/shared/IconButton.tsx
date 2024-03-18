import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

interface ButtonProps {
  icon: string;
  opacity?: number;
  iconColor?: string;
  backgroundColor?: string;
}

const IconButton = ({
  icon,
  opacity = 1,
  iconColor = "black",
  backgroundColor = "white",
}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={{ opacity, ...styles.background, backgroundColor }}>
        {/* Der Hintergrund wird hier gestaltet */}
      </View>
      <Icon source={icon} color={iconColor} size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
});

export default IconButton;
