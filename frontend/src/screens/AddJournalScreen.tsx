import React, { useState, useContext } from "react";
import userId from "../contexts/UserContext";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import PhotoUploadScreen from "./PhotoUploadScreen";
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
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (selection: string) => {
    setImage(selection);
  };

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date = date
  ): void => {
    const currentDate: Date = selectedDate;
    setDate(currentDate);
  };

  const submitInfo = async () => {
    const journalData = {
      userId: userId,
      // routineId: routineId,
      date: date,
      comment: comment,
      image: image,
    };
    try {
      fetch("/journal", {
        method: "POST",
        body: JSON.stringify(journalData),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.question}>
        <Text style={styles.question}>How was your skin today?</Text>
      </View>
      <View>
        <Text>selected: {date.toLocaleDateString()}</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
        />
      </View>
      <View style={styles.comment}>
        <TextInput id="comment" placeholder="Comment" />
      </View>
      <View style={styles.photoUpload}>
        <PhotoUploadScreen image={image} setImage={setImage} />
      </View>
      <View>
        <Button title="Submit" onPress={submitInfo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    margin: 5,
    fontSize: 20,
  },
  comment: {
    width: 250,
    height: 100,
    backgroundColor: "lightgrey",
    margin: 20,
  },
  photoUpload: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    width: 250,
    height: 80,
  },
});
