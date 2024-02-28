import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Button from "../../atoms/shared/Button";

const Leagues = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button
          mode="contained"
          text="Premier League"
          icon={require("../../../../assets/icons/leagues/premierleague.png")}
          contentStyle={{ height: 50, marginHorizontal: 5 }}
          onPress={() => console.log("Premier League")}
        />
        <Button
          mode="contained"
          text="Premier League"
          icon={require("../../../../assets/icons/leagues/premierleague.png")}
          contentStyle={{ height: 50, marginHorizontal: 5 }}
          onPress={() => console.log("Premier League")}
        />
        <Button
          mode="contained"
          text="Premier League"
          icon={require("../../../../assets/icons/leagues/premierleague.png")}
          contentStyle={{ height: 50, marginHorizontal: 5 }}
          onPress={() => console.log("Premier League")}
        />
        <Button
          mode="contained"
          text="Premier League"
          icon={require("../../../../assets/icons/leagues/premierleague.png")}
          contentStyle={{ height: 50, marginHorizontal: 5 }}
          onPress={() => console.log("Premier League")}
        />
        <Button
          mode="contained"
          text="Premier League"
          icon={require("../../../../assets/icons/leagues/premierleague.png")}
          contentStyle={{ height: 50, marginHorizontal: 5 }}
          onPress={() => console.log("Premier League")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: "25%",
  },
});

export default Leagues;
