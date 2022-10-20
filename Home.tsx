import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Blocks from "./components/Blocks";
import Routine from "./components/Routine";
import {
  FridayWorkouts,
  MondayWorkouts,
  ThursdayWorkouts,
  TuesdayWorkouts,
  WednesdayWorkouts,
} from "./data";
import moment from "moment";

const Home = ({ navigation }) => {
  const date = moment();
  const [data, setData] = useState(FridayWorkouts);
  const [header, setHeader] = useState<string>(date.format("dddd"));
  const fetchWorkouts = () => {
    if (date.format("dddd") === "Monday") {
      setHeader("Monday We Destroy Chest!");
      setData(MondayWorkouts);
    }
    if (date.format("dddd") === "Tuesday") {
      setHeader("Tuesday We Train Biceps And Shoulders!");
      setData(TuesdayWorkouts);
    }
    if (date.format("dddd") === "Wednesday") {
      setHeader("LEG DAY LEG DAY LEG DAY!");
      setData(WednesdayWorkouts);
    }
    if (date.format("dddd") === "Thursday") {
      setHeader("Time To Fuck Up Some Back!");
      setData(ThursdayWorkouts);
    }
    if (date.format("dddd") === "Friday") {
      setHeader("As If You'll Ever Be At The Gym On A Friday");
      setData(FridayWorkouts);
    }
    if (date.format("dddd") === "Saturday") {
      setHeader("It's The Weekend... Don't Know Why You're Here");
    }
    if (date.format("dddd") === "Sunday") {
      setHeader("It's The Weekend... Don't Know Why You're Here");
    }
  };
  useEffect(() => fetchWorkouts(), [date.format("dddd")]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerIcons}>
          <Image
            style={styles.headerImg}
            source={require("./assets/reuben.jpg")}
          />
          <Text style={styles.headerText}>{header}</Text>
        </View>
        <View style={styles.browse}>
          <Text style={styles.browseTxt}>Browse Workouts</Text>
          <Blocks navigation={navigation} />
        </View>
        <View style={styles.today}>
          <Text style={styles.browseTxt}>Today's Routine</Text>
          <Routine data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  headerIcons: { width: "100%", marginTop: 30 },
  headerImg: {
    height: 40,
    width: 40,
    alignSelf: "flex-end",
    marginRight: 30,
    borderRadius: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
  },
  browse: { marginTop: 30, marginRight: 15 },
  browseTxt: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    marginLeft: 30,
  },
  today: {
    marginTop: 15,
    marginBottom: 15,
  },
});
