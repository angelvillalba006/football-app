import * as React from "react";
import { Button } from "react-native-paper";
import { Image } from "react-native";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

interface ButtonProps {
  text: string;
  icon: any;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  onPress: () => void;
  contentStyle?: {
    height?: number;
    marginHorizontal?: number;
  };
}

const ButtonComponent = ({
  text,
  icon,
  mode,
  onPress,
  contentStyle,
}: ButtonProps) => {
  const defaultHeight = 50;
  const height = contentStyle?.height || defaultHeight;

  return (
    <Button
      icon={() => <Image source={icon} style={styles.image} />}
      mode={mode}
      onPress={onPress}
      style={{ marginHorizontal: contentStyle?.marginHorizontal }}
      contentStyle={{ height, ...contentStyle }}
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
