import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Workout = ({ data, navigation }) => {
  const [index, setIndex] = useState(0);
  const lenght = data.length;
  const nextHandler = (i) => {
    if (i + 1 !== lenght) {
      setIndex(index + 1);
    } else {
      navigation.navigate("Done");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: data[index].image,
        }}
        imageStyle={{
          opacity: 0.5,
        }}
        style={styles.bg}
      >
        <Text style={styles.header}>{data[index].name}</Text>
        <View style={styles.body}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Sets: {data[index].sets}</Text>
            <Text style={styles.infoText}>Reps: {data[index].reps}</Text>
            <Text style={styles.infoText}>Weight: {data[index].weight}</Text>
            <Text style={styles.desc}>{data[index].description}</Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => nextHandler(index)}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  bg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    resizeMode: "center",
    justifyContent: "center",
  },
  header: {
    height: "50%",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },
  body: {
    position: "absolute",
    bottom: 50,
    left: "5%",
    right: "5%",
    color: "white",
  },
  info: {
    marginLeft: 15,
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  btn: {
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
