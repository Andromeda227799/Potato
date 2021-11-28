import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import SafeScreen from "./SafeScreen";

export default function IntroScreen({ navigation }) {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/intro.png")}
          ></Image>
        </View>
        <LinearGradient
          // Button Linear Gradient
          colors={["transparent", colors.primary]}
          start={{ x: 0, y: 0 }}
          style={styles.cardInfo}
        />
        <View style={styles.text1}>
          <Text
            style={{
              fontSize: 30,
              color: colors.white,
              fontFamily: "Roboto",
              fontWeight: "700",
            }}
          >
            Connect with
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "#c35eff",
              fontFamily: "Roboto",
              fontWeight: "700",
            }}
          >
            People selling nearby
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontSize: 15,
              color: colors.white,
              fontFamily: "Roboto",
            }}
          >
            Right swipe to select, left swipe to reject !
          </Text>
        </View>
        <View style={styles.footer}>
          
          <Text
            style={{
                marginLeft:280,
                marginBottom:80,
              fontSize: 20,
              color: colors.white,
              fontFamily: "Roboto",
              
            }}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            Skip
          </Text>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: 450,
    resizeMode: "contain",
  },
  text1: {
    padding: 40,
    backgroundColor: colors.primary,
    width: "100%",
  },
  footer: {
    backgroundColor: colors.primary,
    // height: "100%",
    width: "100%",
    height:150,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  
  cardInfo: {
    paddingTop: 70,
    paddingBottom: 16,
    position: "absolute",
    width: "100%",
    marginTop: 250,
    alignSelf: "baseline",
    // borderRadius: 10,
    padding: 29,
    height: 200,
    display: "flex",
    justifyContent: "flex-end",
    justifyContent: "space-evenly",
    //   backgroundImage:linearGradient(right, red , blue),
    //   background-image: linear-gradient(direction, color-stop1, color-stop2, ...)
  },
});
