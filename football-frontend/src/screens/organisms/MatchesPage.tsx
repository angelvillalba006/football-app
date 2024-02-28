import React from "react";
import { View, StyleSheet } from "react-native";
import PageHeader from "../../components/molecules/matches/PageHeader";
import Leagues from "../../components/molecules/matches/Leagues";
import ListSubheader from "react-native-paper/lib/typescript/components/List/ListSubheader";
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
      <Leagues />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 10,
  },
});

export default MatchesPage;
