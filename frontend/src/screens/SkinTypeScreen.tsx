import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const SkincareTypeScreen: React.FC<{ route: any }> = ({ route }) => {
  const { skincareType } = route.params;
  const [routinesByType, setRoutinesByType] = useState([]);
  const [fetchRoutinesError, setFetchRoutinesError] = useState(false);

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
