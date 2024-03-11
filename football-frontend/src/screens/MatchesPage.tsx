import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PageHeader from "../components/molecules/matches/PageHeader";
import Leagues from "../components/molecules/matches/Leagues";
import LiveMatches from "../components/organisms/matches/LiveMatches";
import NextMatches from "../components/organisms/matches/NextMatchesList";

const MatchesPage = () => {
  const avatarUrl = {
    uri: "https://zethafiranty.files.wordpress.com/2012/12/fc-barcelona-logo-wallpaper.jpg",
  };

  return (
    <View style={styles.container}>
      <PageHeader
        avatarSize={45}
        avatarSource={avatarUrl.uri}
        pageTitle="Matches"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Leagues />
        <LiveMatches />
        <NextMatches />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#f8f4f4",
  },
});

export default MatchesPage;
