import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
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
    logo: ImageSourcePropType;
    type: "Home" | "Away";
    score: number;
  };
  awayTeam: {
    name: string;
    logo: ImageSourcePropType;
    type: "Home" | "Away";
    score: number;
  };
}

const LiveMatchCard = ({
  matchday,
  leagueName,
  homeTeam,
  awayTeam,
  minutesPlayed,
}: LiveMatchesCardProps) => {
  return (
    <View style={styles.card}>
      <CardBackground />

      <View style={styles.overlay}>
        <Matchday matchday={matchday} />
        <LeagueName league={leagueName} />

        <View style={styles.gameDetails}>
          <Team
            name={homeTeam.name}
            source={homeTeam.logo}
            type={homeTeam.type}
          />
          <GameResult
            hometeam={homeTeam.score}
            awayteam={awayTeam.score}
            minutesPlayed={minutesPlayed}
          />
          <Team
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
    justifyContent: "center",
  },
});

export default LiveMatchCard;
