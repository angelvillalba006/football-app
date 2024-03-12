import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SectionTitle from "../../atoms/shared/SectionTitle";
import NextMatchCard from "../../molecules/matches/NextMatchesCard";
import MatchdayService from "../../../services/matches";
import FetchError from "../../molecules/shared/FetchError";

const NextMatchesList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await MatchdayService.getByLeague("premier-league");

        const upcomingMatches = response.filter((match) => !match.played);
        setMatches(upcomingMatches as any[]);
      } catch (error) {
        console.error("Fehler beim Laden der Matches: ", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <View style={styles.container}>
      <SectionTitle
        title="Today's Matches"
        showButton={true}
        buttonText="See all"
      />
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <NextMatchCard
            key={index}
            date={match.date}
            time={match.time}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
          />
        ))
      ) : (
        <FetchError message="Data Fetch failed" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default NextMatchesList;
