import React from "react";
import { View, StyleSheet } from "react-native";
import SectionTitle from "../../atoms/shared/SectionTitle";
import NextMatchCard from "../../molecules/matches/NextMatchesCard";

const NextMatchesList = () => {
  const matches = [
    {
      date: "30 OCT",
      time: "18:00",
      homeTeam: {
        name: "Team A",
        logo: require("../../../../assets/icons/leagues/premierleague.png"),
      },
      awayTeam: {
        name: "Team B",
        logo: require("../../../../assets/icons/leagues/premierleague.png"),
      },
    },
    {
      date: "30 OCT",
      time: "20:00",
      homeTeam: {
        name: "Team C",
        logo: require("../../../../assets/icons/leagues/premierleague.png"),
      },
      awayTeam: {
        name: "Team D",
        logo: require("../../../../assets/icons/leagues/premierleague.png"),
      },
    },
    {
      date: "30 OCT",
      time: "16:00",
      homeTeam: {
        name: "Team E",
        logo: require("../../../../assets/icons/leagues/premierleague.png"),
      },
      awayTeam: {
        name: "Team F",
        logo: require("../../../../assets/icons/leagues/premierleague.png"),
      },
    },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle
        title="Today's Matches"
        showButton={true}
        buttonText="See all"
      />
      {matches.map((match, index) => (
        <NextMatchCard
          key={index}
          date={match.date}
          time={match.time}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default NextMatchesList;
