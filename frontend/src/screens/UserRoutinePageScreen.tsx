import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

type RoutinePageScreenRouteProp = RouteProp<
  RootStackParamList,
  "UserRoutinePageScreen"
>;

type RoutinePageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserRoutinePageScreen"
>;

type Props = {
  route: RoutinePageScreenRouteProp;
  navigation: RoutinePageScreenNavigationProp;
};

const UserRoutinePageScreen: React.FC<Props> = ({ route, navigation }) => {
  const { routineId, routineName } = route.params;

  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handleAddJournalPress = () => {
    navigation.navigate("AddJournalScreen");
  };

  const handleAddProduct = () => {
    navigation.navigate("SearchToAddScreen", { routineId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <AntDesign name="doubleleft" size={30} color="rgba(1,90,131,255)" />
        </TouchableOpacity>
        <Text style={[styles.titleText, styles.buttonMargin]}>
          {routineName}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddJournalPress}
          >
            <Text style={styles.buttonText}>Add Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMargin]}>
            <Text style={styles.buttonText}>Journal History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleAddProduct}>
        <Text style={styles.infoText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: "#FFFDD0",
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginTop: -7,
  },
  titleText: {
    textAlign: "left",
    fontSize: 40,
    fontFamily: "PlayfairDisplay-Bold",
    color: "rgba(1,90,131,255)",
    marginBottom: 20,
    marginTop: -20,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(1,90,131,255)",
    marginTop: -10,
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Lato-Bold",
    color: "rgba(1,90,131,255)",
    lineHeight: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(1,90,131,255)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  buttonMargin: {
    marginLeft: 25,
  },
});

export default UserRoutinePageScreen;
