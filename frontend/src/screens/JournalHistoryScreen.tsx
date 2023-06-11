import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type JournalHistoryScreenRouteProp = RouteProp<
  RootStackParamList,
  "JournalHistoryScreen"
>;

type Props = {
  route: JournalHistoryScreenRouteProp;
};

const JournalHistoryScreen: React.FC<Props> = ({ route }) => {
  const { routineId } = route.params;
  return (
    <View style={styles.container}>
      <Text>Journal History {routineId}</Text>
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
