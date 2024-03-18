import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "./src/navigation/NavBar";
import ExamplePage from "./src/screens/ExamplePage";
import Onboarding from "./src/screens/OnboardingPage";
import MatchesPage from "./src/screens/MatchesPage";
import MatchDetailsPage from "./src/screens/MatchDetailsPage";

const Stack = createStackNavigator();

// Loading component
const Loading = () => {
  // Display an activity indicator while loading
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

/**
 * Root component of the FC Barcelona app.
 * Renders the navigation stack and sets up the app's layout.
 *
 * @returns The rendered app component.
 */
export default function App() {
  // State variables
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [initialRoute, setInitialRoute] = useState("Onboarding");

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
        setInitialRoute("Navigation");
      }
    } catch (error) {
      console.error("Error @checkOnboarding: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <StatusBar style="auto" />
          {loading ? (
            <Loading />
          ) : (
            <Stack.Navigator
              initialRouteName={initialRoute}
              screenOptions={{
                headerShown: false,
              }}
            >
              {/* Screens */}
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Navigation" component={NavBar} />
              <Stack.Screen name="Matches" component={MatchesPage} />
              <Stack.Screen name="MatchDetails" component={MatchDetailsPage} />
              <Stack.Screen name="Example" component={ExamplePage} />
            </Stack.Navigator>
          )}
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
