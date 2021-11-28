import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ImageInput({ imageURI, onChangeImage }) {
  const reqPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      console.log("camera access nahi diya bro user ne");
    }
  };

  useEffect(() => {
    reqPermission();
  }, []);

  const selectImage = async () => {
    if (!imageURI) {
      try {
        const { uri } = await ImagePicker.launchImageLibraryAsync();
        //console.log(uri);
        onChangeImage(uri);
      } catch (error) {
        console.log("error aaya bro image lene mai", error);
      }
    } else {
      Alert.alert("Alert", "Are you sure you want to delete this Image?", [
        { text: "Delete", onPress: () => onChangeImage(null) },
        { text: "Nope" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={selectImage}>
      
      <View style={styles.container}>
      {console.log(imageURI)}
        {!imageURI && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
          ></MaterialCommunityIcons>
        )}
        {imageURI && (
          <Image source={{ uri: imageURI }} style={styles.image}></Image>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
