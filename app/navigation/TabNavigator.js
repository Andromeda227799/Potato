import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// import MyAccountScreen from "../screens/MyAccountScreen";

import { MaterialCommunityIcons, Feather ,MaterialIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import BuyingScreen from "../screens/BuyingScreen";
import SellingScreen from "../screens/SellingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import CustomPotatoIcon from "../components/CustomPotatoIcon";
import MessegesScreen from "../screens/MessegesScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    
    <Stack.Screen
      name="SellingScreen"
      component={SellingScreen}
    ></Stack.Screen>
    <Stack.Screen name="AddNewSell" component={ListingEditScreen}></Stack.Screen>
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: [
        {
          position: "absolute",
          bottom: 10,
          left: 12,
          right: 12,
          elevation: 0,
          backgroundColor: colors.white,
          borderRadius: 15,
          height: 65,
          display:"flex",
          flexDirection:"row",
          paddingBottom:10,
          shadowOffset:{width:0,height:2},
          shadowColor:colors.black,
          elevation:3,
          
          // alignItems:"center"
        },
      ],
    }}
  >
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <>
            {console.log(color)}
            <Feather name="user" size={24} color={color} />
          </>
        ),
      }}
    ></Tab.Screen>
    {/* <Tab.Screen name="welcome" component={ListingsScreen}></Tab.Screen> */}
    <Tab.Screen
      name="Buy"
      component={BuyingScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <View>
            <CustomPotatoIcon color={color}></CustomPotatoIcon>
          </View>
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="Sell"
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="tag-outline" size={24} color={color} />
        ),
      }}
      component={StackNavigator}
    ></Tab.Screen>
    <Tab.Screen
      name="Chat"
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="chat-bubble-outline" size={24} color={color} />
        ),
      }}
      component={MessegesScreen}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default TabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
