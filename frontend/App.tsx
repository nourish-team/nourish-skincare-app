// Library and package imports
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

// Components
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import UserPageScreen from "./src/screens/UserPageScreen";
import SkincareTypeScreen from "./src/screens/SkinTypeScreen";
import UserRoutinePageScreen from "./src/screens/UserRoutinePageScreen";
import AddJournalScreen from "./src/screens/AddJournalScreen";

// Nav
import { RootStackParamList, MainTabParamList } from "./src/navigation/types";

// Context
import { AppContext } from "./src/contexts/AppContext";

// Tab & Stack
const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// App Tabs
const Apptabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "white",
      headerShown: false,
      tabBarStyle: { backgroundColor: "rgba(1,90,131,255)" },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
    <Tab.Screen name="UserPage" component={UserPageScreen}></Tab.Screen>
  </Tab.Navigator>
);

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
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="HomeScreen" component={Apptabs} />
            <Stack.Screen name="SkincareType" component={SkincareTypeScreen} />
            <Stack.Screen
              name="UserRoutinePageScreen"
              component={UserRoutinePageScreen}
            />
            <Stack.Screen
              name="AddJournalScreen"
              component={AddJournalScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
}
