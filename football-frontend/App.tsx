import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/navigation/NavBar";
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />

          <Stack.Navigator
            initialRouteName="Example"
            screenOptions={{ headerShown: false }}
          >
            {/* Screens */}
            <Stack.Screen name="Example" component={Navigation} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
