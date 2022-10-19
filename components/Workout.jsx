import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { WebView } from "react-native-webview";

const Workout = ({ data, navigation }) => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(200);
  const lenght = data.length;
  const nextHandler = (i) => {
    if (i + 1 !== lenght) {
      setIndex(index + 1);
    } else {
      navigation.navigate("Done");
    }
  };

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
    show: {
      fontSize: 14,
      fontWeight: "400",
      color: "red",
      textAlign: "center",
      marginBottom: 30,
    },
    body: {
      position: "absolute",
      bottom: 100,
      height: height,
      left: "5%",
      right: "5%",
      color: "white",
      marginBottom: 30,
    },
    info: {
      height: 150,
      marginLeft: 15,
      justifyContent: "flex-start",
      marginBottom: 20,
      backgroundColor: "black",
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
    },
    video: {
      marginLeft: 15,
      justifyContent: "center",
      marginBottom: 20,
      backgroundColor: "black",
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
      height: 500,
      width: "100%",
      alignSelf: "center",
    },
    btn: {
      marginTop: 30,
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
        {height === 200 && (
          <Text style={styles.header}>{data[index].name}</Text>
        )}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        {height === 200 && (<View style={styles.info}>
            <Text style={styles.infoText}>Sets: {data[index].sets}</Text>
            <Text style={styles.infoText}>Reps: {data[index].reps}</Text>
            <Text style={styles.infoText}>Weight: {data[index].weight}</Text>
            <Text style={styles.desc}>{data[index].description}</Text>
          </View>)}
          <TouchableOpacity
            onPress={() => {
              if (height === 200) {
                setHeight(500);
              } else {
                setHeight(200);
              }
            }}
          >
            <Text style={styles.show}>
              {height === 200 ? "Show Tutorial" : "Hide Tutorial"}
            </Text>
          </TouchableOpacity>
          <View style={styles.video}>
            <WebView
              style={{
                height: "100%",
                width: "100%",
                alignSelf: "center",
                borderRadius: 10,
              }}
              javaScriptEnabled={true}
              source={{
                uri: data[index].tutorial,
              }}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.btn} onPress={() => nextHandler(index)}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Workout;
