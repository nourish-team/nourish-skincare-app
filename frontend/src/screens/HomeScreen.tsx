import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>nourish.</Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/images/nourish_logo.png")}
        />
      </View>
      <View style={styles.line} />
      <Text style={styles.infoText}>
        Hello Beautiful... Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsa modi placeat dolor, obcaecati quod impedit incidunt nesciunt
        deleniti sequi odit aperiam aliquam repellat aliquid numquam
        reprehenderit, quas quae enim repudiandae.
      </Text>
      <View style={styles.line} />
      <Text style={styles.infoText}>browse by skin type</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMargin]}>
            <Text style={styles.buttonText}>Dry</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Oily</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMargin]}>
            <Text style={styles.buttonText}>Sensitive</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginTop: -7,
  },
  titleText: {
    textAlign: "left",
    fontSize: 40,
    fontFamily: "PlayfairDisplay-Bold",
    color: "rgba(40,40,233,255)",
    marginBottom: 20,
    marginTop: -20,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(40,40,233,255)",
    marginTop: -10,
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Lato-Bold",
    color: "rgba(40,40,233,255)",
    lineHeight: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(40,40,233,255)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  buttonMargin: {
    marginLeft: 25,
  },
});

export default HomeScreen;
