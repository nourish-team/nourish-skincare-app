import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.navigate("WelcomeScreen");
  };

  const handleSignupButtonPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text>sign up</Text>
      <Text style={styles.signupText}>name</Text>
      <TextInput style={styles.inputContainer}></TextInput>
      <Text style={styles.signupText}>email</Text>
      <TextInput style={styles.inputContainer}></TextInput>
      <Text>password</Text>
      <TextInput style={styles.inputContainer}></TextInput>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Button title="Submit" onPress={handleSignupButtonPress}></Button>
      <Button title="Back" onPress={handleBackPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#FFFDD0",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 200,
    height: 50,
    backgroundColor: "rgba(1,90,131,255)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  inputContainer: {
    width: 200,
    height: 50,
    borderColor: "rgba(1,90,131,255)",
    borderWidth: 1,
    padding: 10,
  },
  signupText: {
    textAlign: "left",
  },
});

export default SignupScreen;
