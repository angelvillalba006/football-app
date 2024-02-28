import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome6";
import ExamplePage from "../screens/organisms/ExamplePage";
import NavigationContext from "../services/navigationContext";

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "example1", icon: "house" },
    { key: "example2", icon: "house" },
    { key: "example3", icon: "house" },
  ]);

  // Define the renderScene function to map the routes to their respective components
  const renderScene = BottomNavigation.SceneMap({
    example1: ExamplePage,
    example2: ExamplePage,
    example3: ExamplePage,
  });

  // Define the renderIcon function to render the icon for the Home and Example routes
  const renderIcon = ({ route, color }: { route: any; color: string }) => (
    <FontAwesome name={route.icon} size={24} color={color} />
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
        barStyle={{ backgroundColor: "#D9D9D9", height: 55 }}
        theme={{ colors: { secondaryContainer: "#FFB35A" } }}
      />
    </NavigationContext.Provider>
  );
};

export default NavBar;
