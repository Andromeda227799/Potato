import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, }) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#C25AFF',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "45%",
    marginVertical: 10,
  },
  text: {
    color: colors.secondary,
    fontSize: 18,
    // fontFamily:GothicA1_200ExtraLight,
    textTransform: "uppercase",
    // fontWeight: "bold",
    // fontFamily: 'GothicA1_100Thin',
  },
});

export default AppButton;
