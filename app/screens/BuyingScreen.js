import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import SafeScreen from "./SafeScreen";
import Swiper from "react-native-deck-swiper";
import colors from "../config/colors";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
const users = [
  {
    id: 1,
    image: require("../assets/user1.jpg"),
    name: "user1",
    selling: "plant",
    distance: 50,
  },
  {
    id: 2,
    image: require("../assets/user1.jpg"),
    name: "user2",
    selling: "plant",
    distance: 50,
  },
  {
    id: 3,
    image: require("../assets/user1.jpg"),
    name: "user3",
    selling: "plant",
    distance: 50,
  },
  {
    id: 4,
    image: require("../assets/user1.jpg"),
    name: "user4",
    selling: "plant",
    distance: 50,
  },
  {
    id: 5,
    image: require("../assets/user1.jpg"),
    name: "user5",
    selling: "plant",
    distance: 50,
  },
];

const swipeRef = React.createRef();

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={card.image} style={styles.cardImage}></Image>

    <LinearGradient
      // Button Linear Gradient
      colors={["transparent", "rgba(0,0,0,1)"]}
      start={{ x: 0, y: -0.1 }}
      style={styles.cardInfo}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontFamily: "Roboto",
          fontWeight: "700",
        }}
      >
        Name : {card.name}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontFamily: "Roboto",
          fontWeight: "700",
        }}
      >
        Selling : {card.selling}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontFamily: "Roboto",
          fontWeight: "700",
        }}
      >
        Distance : {card.distance}m
      </Text>
    </LinearGradient>
  </View>
);

export default function BuyingScreen() {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex((index + 1) % users.length);
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/logoDark.png")}
          ></Image>
        </View>
        <View style={styles.content}>
          <Swiper
            ref={swipeRef}
            cards={users}
            cardIndex={index}
            renderCard={(card) => <Card card={card} />}
            onSwiped={onSwiped}
            stackSize={3}
            stackScale={8}
            stackSeparation={20}
            disableBottomSwipe
            disableTopSwipe
            animateOverlayLabelsOpacity
            animateCardOpacity
            backgroundColor={"transparent"}
            infinite
            overlayLabels={{
              left: {
                title: "Nope",
                style: {
                  label: {
                    borderWidth: 5,
                    height:46,
                    width:72,
                    padding:5,
                    paddingLeft:8,
                    borderColor: "red",
                    color: "red",
                    fontSize: 24,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 20,
                    marginLeft: -20,
                  },
                },
              },
              right: {
                title: "Yess",
                style: {
                  label: {
                    borderWidth: 5,
                    height:46,
                    width:72,
                    padding:5,
                    paddingLeft:10,
                    borderColor: "#04ff00",
                    color: "#04ff00",
                    fontSize: 24,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 20,
                    marginLeft: 20,
                  },
                },
              },
            }}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableWithoutFeedback
            onPress={() => swipeRef.current.swipeLeft()}
          >
            <Image
              style={styles.button}
              source={require("../assets/Reject.png")}
            ></Image>
          </TouchableWithoutFeedback>
          {/* <Image source={require("../assets/logoDark.png")}></Image> */}
          <TouchableWithoutFeedback
            onPress={() => swipeRef.current.swipeRight()}
          >
            <Image
              style={styles.button}
              source={require("../assets/Aceept.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.footer}></View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    padding: 30,
    paddingBottom: 10,
    // flex: 0.000001,
    // backgroundColor:"blue"
    // height: 0,
    // marginBottom: 30,
  },
  container: {
    height: "100%",
    width: "100%",
    //   backgroundColor:"red"
  },
  logo: {
    height: 37,
    width: 54,
    
  },
  content: {
    flex: 0.8,
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  footer: {
    flex: 0.001,
    height: 60,
  },
  card: {
    width: "100%",
    height: "62%",
    // backgroundColor: colors.white,
    display: "flex",
    // justifyContent:"center",
    // alignItems: "flex-end",
    justifyContent: "flex-end",
    alignItems:"center"
  },
  cardImage: {
    width: "100%",
    height: 450,
    borderRadius: 10,
    resizeMode: "contain",
  },
  cardInfo: {
    paddingTop: 70,
    paddingBottom: 16,
    position: "absolute",
    width: 320,
    marginLeft:12,
    alignSelf: "baseline",
    borderRadius: 10,
    padding: 29,
    height: 200,
    display: "flex",
    justifyContent: "flex-end",
    justifyContent: "space-evenly",
    //   backgroundImage:linearGradient(right, red , blue),
    //   background-image: linear-gradient(direction, color-stop1, color-stop2, ...)
  },
  buttonsContainer: {
    display: "flex",
    marginTop:25,
    flexDirection: "row",
    //   justifyContent:"space-evenly",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  button: {
    marginHorizontal: 20,
    marginTop:70,
    height: 80,
    width: 80,
    resizeMode:"contain"
  },
});
