import React from "react";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function ListItemDeleteIcon({ onClick }) {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={{
          backgroundColor: colors.red,
          width: 70,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="trash-can" color="white" size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteIcon;
