import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function AddJournalScreen() {
  const [comment, setComment] = useState("");

  const [date, setDate] = useState(new Date());

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date = date
  ): void => {
    const currentDate: Date = selectedDate;
    setDate(currentDate);
  };

  const submitInfo = () => {};

  return (
    <View>
      <View>
        <Text>How was your skin today?</Text>
      </View>
      <View>
        <Text>selected: {date.toLocaleDateString()}</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
        />
      </View>
      <View>
        <TextInput id="comment" placeholder="Comment" />
      </View>
      <View>{/* <PhotoUpload /> */}</View>
      <View>
        <Button title="Submit" onPress={submitInfo} />
      </View>
    </View>
  );
}
