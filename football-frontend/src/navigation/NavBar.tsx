import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { Image, StyleSheet, Text, View } from "react-native";
import NavigationContext from "../services/navigationContext";
import ExamplePage from "../screens/ExamplePage";
import MatchesPage from "../screens/MatchesPage";

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "matches",
      icon: require("../../assets/icons/navigation/field.png"),
    },
    {
      key: "example2",
      icon: require("../../assets/icons/navigation/field.png"),
    },
    {
      key: "example3",
      icon: require("../../assets/icons/navigation/field.png"),
    },
  ]);

  // Define the renderScene function to map the routes to their respective components
  const renderScene = BottomNavigation.SceneMap({
    matches: MatchesPage,
    example2: ExamplePage,
    example3: ExamplePage,
  });

  // Define the renderIcon function to render the icon and label for the routes
  const renderIcon = ({ route, color }: { route: any; color: string }) => (
    <View style={styles.iconContainer}>
      <Image source={route.icon} style={[styles.icon, { tintColor: color }]} />
    </View>
  );

  return (
    <NavigationContext.Provider value={{ index, setIndex }}>
      <BottomNavigation
        compact={true}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        inactiveColor="#000"
        barStyle={{
          backgroundColor: "#D9D9D9",
          height: 55,
        }}
        theme={{ colors: { secondaryContainer: "#ff2c84" } }}
      />
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 3,
  },
});

export default NavBar;
