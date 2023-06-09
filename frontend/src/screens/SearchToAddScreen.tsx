import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

type SearchToAddScreenRouteProp = RouteProp<
  RootStackParamList,
  "SearchToAddScreen"
>;

type SearchToAddScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SearchToAddScreen"
>;

type Props = {
  route: SearchToAddScreenRouteProp;
  navigation: SearchToAddScreenNavigationProp;
};

const SearchToAddScreen: React.FC<Props> = ({ route, navigation }) => {
  const { routineId } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<String[]>([]);

  useEffect(() => {}, [routineId]);

  const handleSearchItem = () => {};

  const handleItemSelect = () => {};

  return (
    <View>
      <TextInput value={searchQuery} onChangeText={setSearchQuery} />
      <TouchableOpacity onPress={handleSearchItem}>
        <Text>Search {routineId}</Text>
      </TouchableOpacity>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleItemSelect}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

export default SearchToAddScreen;
