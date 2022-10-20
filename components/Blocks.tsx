import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  FridayWorkouts,
  MondayWorkouts,
  ThursdayWorkouts,
  TuesdayWorkouts,
  WednesdayWorkouts,
  workouts,
} from "../data";

const Blocks = ({ navigation }) => {
  return (
    <FlatList
      data={workouts}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{ alignItems: "center" }}
          key={index}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Workout", {
              workout: item,
            })
          }
        >
          <ImageBackground
            style={styles.container}
            source={{
              uri: item.img,
            }}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.info}>
              <Text style={styles.header}>{item.name}</Text>
              <Text style={styles.subText}>{item.desc}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
      horizontal={true}
      scrollEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Blocks;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    marginLeft: 10,
    marginTop: 15,
  },
  info: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "gray",
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
    fontWeight: "900",
    marginLeft: 10,
  },
  subText: {
    color: "white",
    fontSize: 10,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    marginLeft: 10,
  },
});
