import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import MyItem from "../components/MyItem";
import MyListAddNew from "../components/MyListAddNew";
import colors from "../config/colors";
import SafeScreen from "./SafeScreen";

export default function SellingScreen({navigation}) {
  const myItems = [
    {
      id: 1,
      image: require("../assets/user1full.png"),
      name: "user1",
      Item: "plant",
      distance: 10,
      min:1,
      max:4
    },
    {
      id: 2,
      image: require("../assets/user1full.png"),
      name: "user2",
      Item: "plant",
      distance: 10,
      min:1,
      max:4
    },
    {
      id: 3,
      image: require("../assets/user1full.png"),
      name: "user3",
      Item: "plant",
      distance: 10,
      min:1,
      max:4
    },
    
  ];
  const [sellingItems, setSellingItems] = React.useState(myItems);


  const addItem = () => {
    setSellingItems([
      ...sellingItems,
      {
        id: sellingItems.length+1,
        image: {uri:inputImage},
        name: item,
        Item: item,
        distance: distance,
        min:quantity,
        max:4
      },
    ]);
    // scrollView.current.scrollToEnd();
  };
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/logoDark.png")}
          ></Image>
        </View>
        <View style={styles.headingContainer}>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "700" }}
          >
            All your listed items
          </Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={myItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=><MyItem item={item}/>}
            ListFooterComponent={<MyListAddNew onPress={()=>{navigation.navigate("AddNewSell")} }/>}
          />
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    padding: 20,
    paddingBottom: 10,
    // flex: 0.001,
    // height: 0,
    // marginBottom: 30,
  },
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
    backgroundColor:colors.backGround
    // alignItems:"center",
    //   backgroundColor:"red"
  },
  headingContainer: {
    // alignItems:"center",
    marginLeft: 20,
    marginTop: 45,
  },
  flatListContainer:{
      paddingTop:20
  },
  logo: {
    height: 37,
    width: 54,
  },
});
