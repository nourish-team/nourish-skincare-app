import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SkincareTypeScreen: React.FC<{ route: any }> = ({ route }) => {
  const { skincareType } = route.params;
  const [routinesByType, setRoutinesByType] = useState([]);
  const [fetchRoutinesError, setFetchRoutinesError] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  const fetchRoutinesByType = async () => {
    try {
      const response = await fetch(""); // put in route later
      const data = await response.json();
      setRoutinesByType(data);
    } catch (error) {
      setFetchRoutinesError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>You selected {skincareType} skin type</Text>
      <Button title="Back" onPress={handleBackPress} />
    </View>
    // Map through the routines here later
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: "#FFFDD0",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default SkincareTypeScreen;
