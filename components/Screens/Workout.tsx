import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Workout = ({ route, navigation }) => {
  const { workout } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.top}
        source={{
          uri: workout.img,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon style={styles.back} name="arrow-left" />
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.header}>{workout.name}</Text>
          <Text style={styles.subText}>{workout.desc}</Text>
        </View>
      </ImageBackground>
      <View style={{ marginTop: 15, marginBottom: 15 }}>
        {workout.splits.map((item, index) => (
          <View key={index} style={styles.container}>
            <Image style={styles.img} source={{ uri: item.image }} />
            <View style={styles.infoB}>
              <Text style={styles.headerB}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.btn}>Sets: {item.sets}</Text>
                <Text style={styles.btn}>Reps: {item.reps}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Workout;

const styles = StyleSheet.create({
  back: {
    color: "white",
    marginTop: 50,
    marginLeft: 25,
    fontSize: 20,
  },
  top: {
    height: 400,
    width: "100%",
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
  container: {
    marginTop: 15,
    height: 200,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerB: {
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
  infoB: {
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
