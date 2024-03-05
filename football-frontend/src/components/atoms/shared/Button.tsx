import * as React from "react";
import { Button } from "react-native-paper";
import { Image, ImageSourcePropType, View } from "react-native";
import { StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  icon: ImageSourcePropType;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  onPress: () => void;
  contentStyle?: {
    height?: number;
    marginHorizontal?: number;
  };
  active?: boolean; // Added active prop
}

const ButtonComponent = ({
  text,
  icon,
  mode,
  onPress,
  contentStyle,
  active,
}: ButtonProps) => {
  const defaultHeight = 50;
  const height = contentStyle?.height || defaultHeight;
  const tintColor = active ? "white" : "#b2b2b2"; // Set tintColor based on active prop
  const textColor = active ? "white" : "#b2b2b2"; // Set textColor based on active prop

  return (
    <Button
      icon={() => (
        <Image
          source={icon as ImageSourcePropType}
          style={[styles.image, { tintColor }]}
        />
      )}
      mode={mode}
      onPress={onPress}
      style={[{ marginHorizontal: contentStyle?.marginHorizontal }]}
      contentStyle={{ height, ...contentStyle }}
      buttonColor={active ? "#ff2c84" : "#fff"} // Set button color based on active prop
      labelStyle={{ color: textColor }} // Set text color based on active prop
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
});

export default ButtonComponent;
