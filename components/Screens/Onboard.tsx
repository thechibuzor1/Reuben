import {
  Alert,
  BackHandler,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";

const Onboard = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert("Hold on!", "Are you sure you want to leave???", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const date = moment();
  const [data, setData] = useState<string>(date.format("dddd"));
  const fetchWorkouts = () => {
    if (date.format("dddd") === "Monday") {
      setData("Chest Day!");
    }
    if (date.format("dddd") === "Tuesday") {
      setData("Shoulders & Arms Day!");
    }
    if (date.format("dddd") === "Wednesday") {
      setData("Leg Day!");
    }
    if (date.format("dddd") === "Thursday") {
      setData("Back Day!");
    }
    if (date.format("dddd") === "Friday") {
      setData("Full Body Day!");
    }
  };

  useEffect(() => fetchWorkouts(), [date.format("dddd")]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/reuben.jpg")}
        /*  imageStyle={{
          opacity: 0.5,
        }} */
        style={styles.bg}
      >
        <Text style={styles.header}>Today is {data}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>Let's Begin!</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  bg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    resizeMode: "center",
    justifyContent: "center",
  },
  header: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  btn: {
    position: "absolute",
    bottom: 50,
    borderRadius: 5,
    backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 50,
    width: "50%",
  },
  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: "900",
  },
});
