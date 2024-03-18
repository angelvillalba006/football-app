import React from "react";
import {
  Canvas,
  Image,
  useImage,
  Mask,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";

interface CardBackgroundProps {
  x?: number;
  y?: number;
  height?: number;
  width?: number;
}

const CardBackground = ({
  x = 50,
  y = 20,
  height = 250,
  width = 300,
}: CardBackgroundProps) => {
  const imageUri = require("../../../../assets/icons/leagues/premierleague.png");
  const photo = useImage(imageUri);

  return (
    <Canvas style={{ height: height, width: width }}>
      <Mask
        mask={
          <Rect x={0} y={0} height={height} width={width}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, 550)}
              colors={["white", "transparent", "transparent", "transparent"]}
            />
          </Rect>
        }
      >
        {photo && (
          <Image
            image={photo}
            x={x}
            y={y}
            height={height}
            width={width}
            fit="contain"
          />
        )}
      </Mask>
    </Canvas>
  );
};

export default CardBackground;
