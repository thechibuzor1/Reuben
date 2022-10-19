import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Workout from "../Workout";
import { useEffect, useState } from "react";
import {
  FridayWorkouts,
  MondayWorkouts,
  ThursdayWorkouts,
  TuesdayWorkouts,
  WednesdayWorkouts,
} from "../../data";
import moment from "moment";

export const Home = ({ navigation }) => {
  const date = moment();
  const [data, setData] = useState(FridayWorkouts);
  const fetchWorkouts = () => {
    if (date.format("dddd") === "Monday") {
      setData(MondayWorkouts);
    }
    if (date.format("dddd") === "Tuesday") {
      setData(TuesdayWorkouts);
    }
    if (date.format("dddd") === "Wednesday") {
      setData(WednesdayWorkouts);
    }
    if (date.format("dddd") === "Thursday") {
      setData(ThursdayWorkouts);
    }
    if (date.format("dddd") === "Friday") {
      setData(FridayWorkouts);
    }
  };
  useEffect(() => fetchWorkouts(), [date.format("dddd")]);

  return (
    <SafeAreaView style={styles.container}>
      <Workout navigation={navigation} data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
