import React from "react";
import { View, StyleSheet } from "react-native";
import PageTitle from "../../atoms/shared/PageTitle";
import ProfileAvatar from "../../atoms/matches/Avatar";

interface PageHeaderProps {
  avatarSize: number;
  avatarSource: string;
  pageTitle: string;
}

const PageHeader = ({
  avatarSize,
  avatarSource,
  pageTitle,
}: PageHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <PageTitle title={pageTitle} />
      </View>
      <View style={styles.avatarContainer}>
        <ProfileAvatar size={avatarSize} source={avatarSource} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: "4%",
  },
  avatarContainer: {
    position: "absolute",
    left: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageHeader;
