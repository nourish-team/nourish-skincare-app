import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import UserContext from "../contexts/UserContext";

const SkincareTypeScreen: React.FC<{ route: any }> = ({ route }) => {
  const { skincareType } = route.params;
  const [routinesByType, setRoutinesByType] = useState([]);
  const [fetchRoutinesError, setFetchRoutinesError] = useState(false);
  const {userId} = useContext(UserContext);
  
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    fetchRoutinesByType();
  }, []);

  const fetchRoutinesByType = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/routine/skintype/${skincareType.toLowerCase()}`); // put in route later
      const data = await response.json();
      setRoutinesByType(data);
    } catch (error) {
      setFetchRoutinesError(false);
    }
  };

  const handelPostLike = async (routineId:number) => {
    console.log(routineId, "was clicked clicked");
    const postReq = {
      users_id: userId,
      routines_id: routineId,
      like: true
    }

    try {
      const response = await fetch(`http://10.0.2.2:8080/like/routine`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postReq),
      }); // put in route later
      const data = await response.json();
      console.log("data of like", data);
    } catch (error) {
      
    }
  }

  return (
    <View style={styles.container}>
      <Text>You selected {skincareType} skin type</Text>
      {routinesByType.map((routine: any) => (
        <View style={styles.routine} key={routine.id}>
          <Text>{routine.routine_name}</Text>
          <Text>{routine.routine_product}</Text>
          <Text>{routine.created_at}</Text>
          <Pressable style={styles.button} onPress={() => handelPostLike(routine.id)}>
            <Text>Like</Text>
          </Pressable>
          
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
  routine: {
    marginBottom: 20
  },
  button: {
      width: 60,
      backgroundColor: "#FFB6C1",
  }
});

export default SkincareTypeScreen;
