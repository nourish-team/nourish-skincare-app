import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

// Components
import HomeScreen from "./src/screens/HomeScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

// Context
import { AppContext } from "./src/contexts/AppContext";

// Stack
const Stack = createStackNavigator();

export default function App() {
  // States
  const [isLoading, setIsLoading] = useState(true);

  // Use Effects
  // Loading Delay for the looks
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
    };
    loadFonts();
  }, []);

  // Helpers
  const fetchFonts = () => {
    return Font.loadAsync({
      "PlayfairDisplay-Bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
      "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    });
  };

  // Loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <AppContext.Provider value={setIsLoading}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
}
