import React from "react";
import { StyleSheet, View } from "react-native";

function Seperator() {
  return <View style={styles.seperator}></View>;
}

export default Seperator;
const styles = StyleSheet.create({
  seperator: {
    height: 0.8,
    backgroundColor: "#333333",
    width: "70%",
    alignSelf:"flex-end"
  },
});
