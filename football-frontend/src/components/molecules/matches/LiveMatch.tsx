import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Canvas,
  Image,
  useImage,
  Mask,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";

const LiveMatch = () => {
  const numberOfCards: number = 3; // Anzahl der Karten
  const imageUri = require("../../../../assets/icons/leagues/premierleague.png");
  const photo = useImage(imageUri);

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {[...Array(numberOfCards)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.card,
            index === 0 && numberOfCards === 1 ? { marginLeft: 0 } : null,
          ]}
        >
          <Canvas style={{ height: 200, width: 300 }}>
            <Mask
              mask={
                <Rect x={0} y={0} height={200} width={300}>
                  <LinearGradient
                    start={vec(0, 0)}
                    end={vec(0, 550)}
                    colors={[
                      "white",
                      "transparent",
                      "transparent",
                      "transparent",
                    ]}
                  />
                </Rect>
              }
            >
              {photo && (
                <Image
                  image={photo}
                  x={50}
                  y={20}
                  height={200}
                  width={300}
                  fit="contain"
                />
              )}
            </Mask>
          </Canvas>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#38043c",
    width: 300,
    height: 200,
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 20,
    overflow: "hidden", // Verhindert, dass das Bild über die Grenzen der Karte hinausgeht
  },
});

export default LiveMatch;
