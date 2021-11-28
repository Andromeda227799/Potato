import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListItem({
  title,
  subTitle,
  image,
  onPress,
  onRightSwipe,
  showChevrons = true,
}) {
  return (
    <Swipeable friction={2} renderRightActions={onRightSwipe}>
      <TouchableHighlight underlayColor={"#d9d9d9"} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>
              {subTitle.length > 27
                ? subTitle.substring(0, 27 - 3) + "..."
                : subTitle}
            </AppText>
          </View>
          {showChevrons ? (
            <View style={styles.chevronContainer}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={35}
                color={"black"}
              ></MaterialCommunityIcons>
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    backgroundColor: colors.backGround,
  },
  textContainer: {
    justifyContent: "center",
    justifyContent:"space-evenly",
    marginLeft:18
  },
  image: {
    // marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    width: 270,
    fontSize:16
  },
  title: {
    fontWeight: "700",
    fontFamily:"Roboto",
    color:colors.black
  },
  chevronContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItem;
