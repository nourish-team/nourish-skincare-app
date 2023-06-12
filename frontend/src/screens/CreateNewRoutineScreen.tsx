import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { RootStackParamList } from "../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import ItemsContext from "../contexts/ItemsContext";
import SearchToAddNewScreen from "./SearchToAddNewScreen";

type CreateNewRoutineRouteProp = RouteProp<
  RootStackParamList,
  "CreateNewRoutineScreen"
>;

type CreateNewRoutineNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CreateNewRoutineScreen"
>;

type Prop = {
  route: CreateNewRoutineRouteProp;
  navigation: CreateNewRoutineNavigationProp;
};

const CreateNewRoutineScreen: React.FC<Prop> = ({ route, navigation }) => {
  const { selectedItems } = route.params || { selectedItems: [] };
  const [savedItems, setSavedItems] = useState<
    (number | { itemId: number; itemName: string })[]
  >([]);

  useEffect(() => {
    if (selectedItems && selectedItems.length > 0) {
      setSavedItems((prevSavedItems) => [...prevSavedItems, ...selectedItems]);
    }
  }, [selectedItems]);

  const handleCancelButtonPress = () => {
    navigation.navigate("HomeScreen");
  };

  const handleAddProductsPress = () => {
    navigation.navigate("SearchToAddNewScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Name your new routine!</Text>
      <TextInput style={styles.searchBox}></TextInput>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleAddProductsPress}
      >
        <Text style={styles.createButtonText}>Add Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create new routine</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={handleCancelButtonPress}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
      {savedItems && savedItems.length > 0 ? (
        savedItems.map((item) => (
          <Text key={typeof item === "number" ? item : item.itemId}>
            {typeof item === "number" ? item : item.itemName}
          </Text>
        ))
      ) : (
        <Text>No selected items</Text>
      )}
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
