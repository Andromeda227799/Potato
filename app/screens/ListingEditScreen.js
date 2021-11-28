import React from "react";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from "react-native";

import ImageInput from "../components/ImageInput";

import SafeScreen from "./SafeScreen";

import { useState } from "react";
import AppTextInput2 from "../components/AppTextInput2";
import AppButton from "../components/AppButton";

export default function ListingEditScreen({navigation}) {
  const [image, setImage] = React.useState();
  const [item, setitem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [distance, setDistance] = useState('');
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.Image}
            source={require("../assets/logoDark.png")}
          ></Image>
        </View>
        <View style={styles.imageContainer} >
          <ImageInput imageURI={image} onChangeImage={setImage}></ImageInput>
        </View>
        <View style={styles.inputContanier}>
          <AppTextInput2 placeholder="Item" setText={setitem}></AppTextInput2>
          <AppTextInput2 placeholder="Quantity" setText={setQuantity}></AppTextInput2>
          <AppTextInput2 placeholder="Distance (Km)" setText={setDistance} keyboardType="numeric"></AppTextInput2>
          
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton title="SUBMIT" onPress={()=>{navigation.navigate("SellingScreen")}}></AppButton>
        </View>

      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: "100%",
    width: "100%",
    alignItems: "center",
    // justifyContent:"center"
  },
  Image: {
    height: 80,
    width: 120,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical:20
  },
  logoContainer:{
      marginVertical:20,
  },

  inputContanier: {
      width:"100%"
  },
  buttonsContainer:{
      marginVertical:30
  },
});
