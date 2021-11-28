import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

import SafeScreen from './app/screens/SafeScreen';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import BuyingScreen from './app/screens/BuyingScreen';
import SellingScreen from './app/screens/SellingScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MessegesScreen from './app/screens/MessegesScreen';

import navigationTheme from './app/navigation/navigationTheme'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/TabNavigator";
// import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {

  const [email, setemail] = useState('shamith@gmail.com');
  const [password, setPassword] = useState('sammy');
  const [name, setName] = useState('Shamith');


  const Stack = createStackNavigator();
  
  const FinalNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
      ></Stack.Screen>
      <Stack.Screen name="Main" component={TabNavigator}></Stack.Screen>
    </Stack.Navigator>
  );


  return (
    // <Signup setemail={setemail} setpassword={setPassword} setname={setName}></Signup>
    // <Login email={email} password={password} name={name}></Login>
    // <BuyingScreen></BuyingScreen>
    // <SellingScreen></SellingScreen>
    // <ListingEditScreen></ListingEditScreen>
    // <MessegesScreen></MessegesScreen>
    <NavigationContainer theme={navigationTheme}>
      {/* <TabNavigator AuthNavigator={AuthNavigator} StackNavigator={StackNavigator} /> */}
<FinalNavigator></FinalNavigator>
      {/* <AuthNavigator></AuthNavigator> */}
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
