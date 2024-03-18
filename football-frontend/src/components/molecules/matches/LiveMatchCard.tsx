import React from "react";
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import CardBackground from "../../atoms/matches/CardBackground";
import Matchday from "../../atoms/matches/Matchday";
import LeagueName from "../../atoms/matches/LeagueName";
import GameResult from "../../atoms/matches/GameResult";
import Team from "./Team";

interface LiveMatchesCardProps {
  matchday: number;
  leagueName: string;
  minutesPlayed: string;
  homeTeam: {
    name: string;
    logo: string;
    type: "Home" | "Away";
    score: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    type: "Home" | "Away";
    score: number;
  };
  cardStyle: "listItem" | "detailsPage";
  marginLeft?: number;
}

const LiveMatchCard = ({
  matchday,
  leagueName,
  homeTeam,
  awayTeam,
  minutesPlayed,
  cardStyle,
  marginLeft = 15,
}: LiveMatchesCardProps) => {
  const textColor = cardStyle === "detailsPage" ? "black" : undefined;
  const backgroundColor = cardStyle === "detailsPage" ? "white" : "#38043c";
  const showCardBackground = cardStyle === "listItem";

  return (
    <View style={[styles.card, { backgroundColor, marginLeft }]}>
      {showCardBackground && <CardBackground />}

      <View style={styles.overlay}>
        <Matchday matchday={matchday} textColor={textColor} />
        <LeagueName league={leagueName} textColor={textColor} />

        <View style={styles.gameDetails}>
          <Team
            textColor={textColor}
            name={homeTeam.name}
            source={homeTeam.logo}
            type={homeTeam.type}
          />
          <GameResult
            textColor={textColor}
            hometeam={homeTeam.score}
            awayteam={awayTeam.score}
            minutesPlayed={minutesPlayed}
          />
          <Team
            textColor={textColor}
            name={awayTeam.name}
            source={awayTeam.logo}
            type={awayTeam.type}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 200,
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
    justifyContent: "center",
  },
});

export default LiveMatchCard;
