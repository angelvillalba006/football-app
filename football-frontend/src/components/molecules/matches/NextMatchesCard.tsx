import React from "react";
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import MatchDate from "../../atoms/matches/MatchDate";
import ClubLogo from "../../atoms/matches/ClubLogo";
import ClubName from "../../atoms/matches/ClubName";

interface NextMatchesCardProps {
  date: string;
  time: string;
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
}

const NextMatchesCard = ({
  date,
  time,
  homeTeam,
  awayTeam,
}: NextMatchesCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.rowContainer}>
          <View style={styles.homeTeam}>
            <ClubName name={homeTeam.name} />
            <ClubLogo size={35} uri={homeTeam.logo} />
          </View>
          <View style={styles.matchDateContainer}>
            <MatchDate date={date} time={time} />
          </View>
          <View style={styles.awayTeam}>
            <ClubLogo size={35} uri={awayTeam.logo} />
            <ClubName name={awayTeam.name} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingRight: 25,
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    height: 80,
    marginLeft: 25,
    marginTop: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  matchDateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTeam: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flexBasis: "25%",
  },
  awayTeam: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "25%",
  },
});

export default NextMatchesCard;
