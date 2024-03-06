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

const CardBackground = () => {
  const imageUri = require("../../../../assets/icons/leagues/premierleague.png");
  const photo = useImage(imageUri);

  return (
    <Canvas style={{ height: 200, width: 300 }}>
      <Mask
        mask={
          <Rect x={0} y={0} height={200} width={300}>
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
            x={50}
            y={20}
            height={250}
            width={300}
            fit="contain"
          />
        )}
      </Mask>
    </Canvas>
  );
};

export default CardBackground;
