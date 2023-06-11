import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FIREBASE_APP, FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleUsernameChange = (event: string): void => {
    setUsername(event);
  };

  const handleEmailChange = (event: string): void => {
    setEmail(event);
  };

  const handlePasswordChange = (event: string): void => {
    setPassword(event);
  };

  const handleSignUp = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Sign Up successfully!");
      navigation.navigate("Login");
    } catch (error: any) {
      console.log(error);
      alert("Sign Up failed: " + error.message);
    } finally {
      setEmail('');
      setPassword('');
      setLoading(false);
    }
  
    try {
      const response = await fetch(`http://10.0.2.2:5432/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setUsername('');
    }
  };
  
  const handleBackPress = () => {
    navigation.navigate("WelcomeScreen");
  };

  const handleSignupButtonPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text>sign up</Text>
      <Text style={styles.signupText}>username</Text>
      <TextInput value={username} style={styles.inputContainer} placeholder="Username" autoCapitalize="none" onChangeText={handleUsernameChange}></TextInput>
      <Text style={styles.signupText}>email</Text>
      <TextInput value={email} style={styles.inputContainer} placeholder="Email" autoCapitalize="none" onChangeText={handleEmailChange} ></TextInput>
      <Text>password</Text>
      <TextInput secureTextEntry={true} value={password} style={styles.inputContainer} placeholder="Password" autoCapitalize="none" onChangeText={handlePasswordChange}></TextInput>

      { loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : ( 
        <TouchableOpacity style={styles.buttonContainer} onPress={ handleSignUp }>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
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
