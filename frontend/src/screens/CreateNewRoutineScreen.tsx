import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { RootStackParamList } from "../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

type CreateNewRoutineNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CreateNewRoutineScreen"
>;

type Prop = {
  navigation: CreateNewRoutineNavigationProp;
};

const CreateNewRoutineScreen: React.FC<Prop> = ({ navigation }) => {
  const handleCancelButtonPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Name your new routine!</Text>
      <TextInput style={styles.searchBox}></TextInput>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create new routine</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={handleCancelButtonPress}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: "#FFFDD0",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  searchBox: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: "rgba(1, 90, 131, 255)",
    marginBottom: 10,
    padding: 15,
    color: "rgba(1, 90, 131, 255)",
    fontFamily: "PlayfairDisplay-Bold",
  },
  createButton: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(1, 90, 131, 255)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  createButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  cancelButton: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderColor: "rgba(1, 90, 131, 255)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cancelButtonText: {
    color: "rgba(1, 90, 131, 255)",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  titleText: {
    textAlign: "left",
    fontSize: 25,
    fontFamily: "PlayfairDisplay-Bold",
    color: "rgba(1,90,131,255)",
    marginBottom: 20,
    marginTop: -20,
  },
});

export default CreateNewRoutineScreen;
