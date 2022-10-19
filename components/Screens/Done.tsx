import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Alert,
  BackHandler,
} from "react-native";
import React from "react";
import { useEffect } from "react";

const Done = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        BackHandler.exitApp();
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/reuben.jpg")}
        imageStyle={{
          opacity: 0.2,
        }}
        style={styles.bg}
      >
        <Text style={styles.header}>That's all for today.</Text>
      </ImageBackground>
    </View>
  );
};

export default Done;

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
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
