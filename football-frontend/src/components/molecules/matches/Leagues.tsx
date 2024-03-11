import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Button from "../../atoms/shared/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Leagues = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.firstButton}>
          <Button
            mode="contained"
            text="Premier League"
            icon={require("../../../../assets/icons/leagues/premierleague.png")}
            contentStyle={{ marginHorizontal: 5 }}
            onPress={() => AsyncStorage.removeItem("viewedOnboarding")}
            active={true}
          />
        </View>
        <Button
          mode="contained"
          text="La Liga"
          icon={require("../../../../assets/icons/leagues/laliga.png")}
          contentStyle={{ marginHorizontal: 5 }}
          onPress={() => console.log("La Liga")}
        />
        <Button
          mode="contained"
          text="Bundesliga"
          icon={require("../../../../assets/icons/leagues/bundesliga.png")}
          contentStyle={{ marginHorizontal: 5 }}
          onPress={() => console.log("Bundesliga")}
        />
        <Button
          mode="contained"
          text="Serie A"
          icon={require("../../../../assets/icons/leagues/seriea.png")}
          contentStyle={{ marginHorizontal: 5 }}
          onPress={() => console.log("Serie A")}
        />
        <Button
          mode="contained"
          text="League 1"
          icon={require("../../../../assets/icons/leagues/league1.png")}
          contentStyle={{ marginHorizontal: 5 }}
          onPress={() => console.log("League 1")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  firstButton: {
    marginLeft: 10,
  },
  container: {
    top: "4%",
    height: 50,
  },
});

export default Leagues;
