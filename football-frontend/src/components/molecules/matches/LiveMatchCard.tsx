import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardBackground from "../../atoms/matches/CardBackground";
import Matchday from "../../atoms/matches/Matchday";
import LeagueName from "../../atoms/matches/LeagueName";
import GameResult from "../../atoms/matches/GameResult";
import Team from "./Team";

const LiveMatchCard = () => {
  const numberOfCards: number = 3; // Anzahl der Karten

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {[...Array(numberOfCards)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.card,
            index === 0 && numberOfCards === 1 ? { marginLeft: 0 } : null,
          ]}
        >
          <CardBackground />

          <View style={styles.overlay}>
            <Matchday matchday={27} />
            <LeagueName league="Premier League" />

            <View style={styles.gameDetails}>
              <Team
                name="Newcastle"
                source={require("../../../../assets/logos/clubs/premierleague/newcastle.png")}
                type="Home"
              />
              <GameResult hometeam={2} awayteam={1} minutesPlayed="83+15" />
              <Team
                name="Man City"
                source={require("../../../../assets/logos/clubs/premierleague/manchestercity.png")}
                type="Away"
              />
            </View>
          </View>
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
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  gameDetails: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center", // Änderung der Ausrichtung zu space-between
  },
});

export default LiveMatchCard;
