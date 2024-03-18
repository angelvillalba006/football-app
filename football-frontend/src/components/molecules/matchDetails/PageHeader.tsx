import React from "react";
import { View, StyleSheet } from "react-native";
import PageTitle from "../../atoms/shared/PageTitle";
import IconButton from "../../atoms/shared/IconButton";
import CardBackground from "../../atoms/matches/CardBackground";
import LiveMatchCard from "../matches/LiveMatchCard";

interface PageHeaderProps {
  avatarSize: number;
  avatarSource: string;
  pageTitle: string;
}

const liveMatch = {
  matchday: 27,
  leagueName: "Premier League",
  minutesPlayed: "45+2",
  homeTeam: {
    name: "Newcastle",
    logo: "https://imgresizer.eurosport.com/unsafe/0x100/filters:format(png)/images.sports.gracenote.com/images/lib/basic/sport/football/club/logo/300/4087.png",
    type: "Home",
    score: 2,
  },
  awayTeam: {
    name: "Man City",
    logo: "https://imgresizer.eurosport.com/unsafe/0x100/filters:format(png)/images.sports.gracenote.com/images/lib/basic/sport/football/club/logo/300/4222.png",
    type: "Away",
    score: 1,
  },
};

const PageHeader = ({ pageTitle }: PageHeaderProps) => {
  return (
    <View style={styles.leagueHeader}>
      <CardBackground x={80} y={35} height={350} width={400} />
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <IconButton icon="arrow-left" opacity={0.2} iconColor="white" />
          <View style={styles.titleContainer}>
            <PageTitle title={pageTitle} color="#fff" />
          </View>
          <IconButton icon="dots-vertical" opacity={0.2} iconColor="white" />
        </View>
        <View style={styles.cardContainer}>
          <LiveMatchCard
            marginLeft={0}
            cardStyle="detailsPage"
            matchday={liveMatch.matchday}
            leagueName={liveMatch.leagueName}
            minutesPlayed={liveMatch.minutesPlayed}
            homeTeam={{
              name: liveMatch.homeTeam.name,
              logo: liveMatch.homeTeam.logo,
              type: liveMatch.homeTeam.type,
              score: liveMatch.homeTeam.score,
            }}
            awayTeam={{
              name: liveMatch.awayTeam.name,
              logo: liveMatch.awayTeam.logo,
              type: liveMatch.awayTeam.type,
              score: liveMatch.awayTeam.score,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leagueHeader: {
    height: 220,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#38043c",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContainer: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: "4%",
    paddingHorizontal: 15,
  },
  buttonContainer: {
    position: "absolute",
    right: 15,
    flexDirection: "row",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
});

export default PageHeader;
