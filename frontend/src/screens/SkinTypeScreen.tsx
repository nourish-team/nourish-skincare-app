import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchRoutinesByType();
  }, []);

  const fetchRoutinesByType = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/routine/skintype/${skincareType}`); // put in route later
      const data = await response.json();
      setRoutinesByType(data);
    } catch (error) {
      setFetchRoutinesError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>You selected {skincareType} skin type</Text>
      {routinesByType.map((routine: any) => (
        <View key={routine.id}>
          <Text>{routine.routine_name}</Text>
          <Text>{routine.routine_product}</Text>
          <Text>{routine.created_at}</Text>
        </View>
      ))}
      <Button title="Back" onPress={handleBackPress} />  
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
  },
});

export default SkincareTypeScreen;
