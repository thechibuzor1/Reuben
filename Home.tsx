import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import * as Device from "expo-device";
import React, { useEffect, useRef, useState } from "react";
import Blocks from "./components/Blocks";
import Routine from "./components/Routine";
import {
  FridayWorkouts,
  MondayWorkouts,
  ThursdayWorkouts,
  TuesdayWorkouts,
  WednesdayWorkouts,
} from "./data";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import moment from "moment";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

const Home = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

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

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    async function schedulePushNotification() {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Today We Go Jim! 💪",
          body: header,
          data: { data: header },
        },
        trigger: { seconds: 2 },
      });
    }
    schedulePushNotification();
  }, [header]);
  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

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
          <Routine navigation={navigation} data={data} />
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
  browse: { marginTop: 30 },
  browseTxt: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "bold",
    marginLeft: 30,
  },
  today: {
    marginTop: 15,
    marginBottom: 15,
  },
});
