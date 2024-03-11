import React from "react";
import { View } from "react-native";
import SectionTitle from "../../atoms/shared/SectionTitle";
import LiveMatch from "../../molecules/matches/LiveMatchCard";

const LiveMatches = () => {
  return (
    <View>
      <SectionTitle title="Live Matches" />
      <LiveMatch />
    </View>
  );
};

export default LiveMatches;
