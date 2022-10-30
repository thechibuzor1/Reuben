import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/FontAwesome";

const Info = ({ route, navigation }) => {
  const { workout } = route.params;
  return (
    <ScrollView style={{ flex: 1, display: "flex", backgroundColor: "black" }}>
      <ImageBackground
        style={styles.top}
        source={{
          uri: workout.image,
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "gray",
            borderRadius: 10,
            marginTop: 50,
            marginLeft: 15,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon style={styles.back} name="arrow-left" />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.header}>{workout.name}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.desc}>{workout.description}</Text>
      <View style={styles.descWord}>
        <Text style={styles.txt}>Sets: {workout.sets}</Text>
        <Text style={styles.txt}>Reps: {workout.reps}</Text>
      </View>
      <Text style={styles.videoHead}>Workout Tutorial</Text>
      <View
        style={{
          marginTop: 15,
          justifyContent: "center",
          width: "90%",
          alignSelf: "center",
          borderRadius: 10,
          height: 400,
          marginBottom: 15,
        }}
      >
        <YoutubePlayer
          webViewStyle={{
            borderRadius: 10,
            width: "100%",
            height: "100%",
          }}
          height={400}
          play={true}
          videoId={workout.tutorial}
        />
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  back: {
    color: "white",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
  },
  descWord: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    width: "20%",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  txt: {
    color: "gray",
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "400",
  },
  desc: {
    color: "white",
    marginTop: 15,
    marginLeft: 15,
    fontSize: 14,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "400",
  },
  videoHead: {
    color: "white",
    marginLeft: 15,
    fontSize: 14,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "700",
  },
  info: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#36454F",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  header: {
    color: "white",
    fontSize: 16,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "bold",
    marginLeft: 10,
  },
  top: {
    height: 400,
    width: "100%",
  },
});
