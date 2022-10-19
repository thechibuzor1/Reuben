import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate("onboard");
    }, 2500);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/reuben.jpg")}
        style={{
          height: "100%",
          width: "100%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          animating={animating}
          color="#ffffff"
          size="large"
          style={styles.activityIndicator}
        />
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  activityIndicator: {
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
});
