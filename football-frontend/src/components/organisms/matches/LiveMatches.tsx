import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import SectionTitle from "../../atoms/shared/SectionTitle";
import LiveMatchCard from "../../molecules/matches/LiveMatchCard";

const LiveMatches = () => {
  const liveMatches = [
    {
      matchday: 27,
      leagueName: "Premier League",
      minutesPlayed: "45+2",
      homeTeam: {
        name: "Newcastle",
        logo: require("../../../../assets/logos/clubs/premierleague/newcastle.png"),
        type: "Home",
        score: 2,
      },
      awayTeam: {
        name: "Man City",
        logo: require("../../../../assets/logos/clubs/premierleague/manchestercity.png"),
        type: "Away",
        score: 1,
      },
    },
  ];

  return (
    <View>
      <SectionTitle title="Live Matches" />
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {liveMatches.map((match, index) => (
          <LiveMatchCard
            key={index}
            matchday={match.matchday}
            leagueName={match.leagueName}
            minutesPlayed={match.minutesPlayed}
            homeTeam={{
              name: match.homeTeam.name,
              logo: match.homeTeam.logo,
              type: "Home",
              score: match.homeTeam.score,
            }}
            awayTeam={{
              name: match.awayTeam.name,
              logo: match.awayTeam.logo,
              type: "Away",
              score: match.awayTeam.score,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingRight: 15,
  },
});

export default LiveMatches;
