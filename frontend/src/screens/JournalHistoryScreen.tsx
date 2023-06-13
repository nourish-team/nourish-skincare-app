import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import UserContext from "../contexts/UserContext";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { useEffect, useState, useContext } from "react";

type JournalHistoryScreenRouteProp = RouteProp<
  RootStackParamList,
  "JournalHistoryScreen"
>;

type Props = {
  route: JournalHistoryScreenRouteProp;
};

const JournalHistoryScreen: React.FC<Props> = ({ route }) => {
  const { routineId } = route.params;
  const { userId } = useContext(UserContext);
  const [journalEntries, setJournalEntries] = useState<any[]>([]);
  const [display, setDisplay] = useState<any[]>([]);

  const displayData = () => {
    return journalEntries.map((entry, index) => (
      <View key={index}>
        <Text>{entry.date}</Text>
        <Text>{entry.comments}</Text>
        {entry.img_url && (
          <Image
            source={{ uri: entry.img_url }}
            style={{ width: 100, height: 100 }}
          ></Image>
        )}
      </View>
    ));
  };

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await fetch(
          `http://10.0.2.2:8080/journal/routine/user/?userid=${userId}&routineid=${routineId}`
        );
        const commentData = await response.json();
        setJournalEntries(commentData);
      } catch (err) {
        console.error(err);
      }
    };
    getHistory();
  }, []);

  useEffect(() => {
    if (journalEntries.length > 0) {
      setDisplay(displayData());
    }
  }, [journalEntries]);

  return (
    <View style={styles.container}>
      <Text>Journal History {routineId}</Text>
      <View>{display}</View>
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
});

export default JournalHistoryScreen;
