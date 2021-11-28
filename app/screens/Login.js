import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SafeScreen from "./SafeScreen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
export default function Login({ name, navigation }) {
  const [status, setStatus] = useState(true)
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const email="shamith2709@gmail.com";
  const password="sam";

  const handleSubmit=()=>{
    if(email==inputEmail&&password==inputPassword){
      navigation.navigate("Main")
      setStatus(true);
    }else{
      setStatus(false);
    }
    // return false;
  }
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "700" }}>
            LOGIN
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.Image}
            source={require("../assets/logoWhite.png")}
          ></Image>
        </View>
        <View style={styles.inputContainer}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              color: colors.lightGrey,
              marginLeft: 12,
            }}
          >
            {Boolean(inputEmail != "") && "Email"}
          </Text>
          <AppTextInput
            fontSize={18}
            placeholder="Email"
            setText={setInputEmail}
          ></AppTextInput>
          <Text
            style={{
              marginTop:30,
              // backgroundColor:"red",
              color: "white",
              fontSize: 18,
              color: colors.lightGrey,
              marginLeft: 12,
            }}
          >
            {Boolean(inputPassword != "") && "Password"}
          </Text>
          <AppTextInput
            secureTextEntry
            fontSize={18}
            placeholder="Password"
            setText={setInputPassword}
          ></AppTextInput>
        </View>
        {!status&&<Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Try Again! 
          </Text>}
        <View style={styles.buttonContainer}>
          <AppButton title="Login" onPress={handleSubmit}></AppButton>
        </View>
        <Text style={{ color: colors.lightGrey, fontSize: 16 }}>
          Don’t have an account?{" "}
          <Text
            style={{ color: colors.secondary, fontSize: 16 }}
            onPress={() => {navigation.navigate("Signup")}}
          >
            Signup
          </Text>
        </Text>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#7400b8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingTop: 54,
    paddingLeft: 43,
    paddingBottom: 40,
    display: "flex",

    // backgroundColor: "red",
    alignItems: "flex-start",
  },
  logoContainer: {},
  Image: {
    height: 80,
    width: 120,
  },
  inputContainer: {
    marginVertical: 50,
    // display: "flex",
    // justifyContent: "space-between",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    marginBottom: 10,
    //   justifyContent:"center",
    alignItems: "center",
  },
});
