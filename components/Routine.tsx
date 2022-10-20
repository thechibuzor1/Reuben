import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ThursdayWorkouts } from "../data";

const Routine = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Image style={styles.img} source={{ uri: item.image }} />
          <View style={styles.info}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.btn}>Sets: {item.sets}</Text>
              <Text style={styles.btn}>Reps: {item.reps}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Routine;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 200,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 16,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "800",
  },
  img: {
    height: "100%",
    width: "50%",
    borderRadius: 10,
  },
  info: {
    marginLeft: 15,
    width: "50%",
    justifyContent: "space-between",
  },
  desc: {
    color: "gray",
    fontSize: 13,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "800",
  },
  btn: {
    color: "gray",
    fontSize: 13,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "500",
    marginBottom: 15,
  },
});
