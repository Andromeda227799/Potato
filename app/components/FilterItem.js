import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function FilterItem({ item ,onPress}) {
  return (
    <View style={styles.container}>
      <Text style={{marginRight:10, fontFamily: "Roboto", fontSize: 20, fontWeight: "600" }}>
        {item.name}
      </Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <Entypo name="cross" size={10} color="black" />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#b8b8b8",
        display:"flex",
        flexDirection:"row",
        borderRadius:8,
        alignItems:"center",
        // justifyContent:"space-between",
        height:35,
        marginRight:10,
        paddingLeft:12,
        paddingRight:8
    },
});
