import React, { useState } from "react";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";

import ListItem from "../components/ListItem";
import Separator from "../components/Seperator";
import ListItemDeleteIcon from "../components/ListItemDeleteIcon";
import SafeScreen from "./SafeScreen";
import colors from "../config/colors";

const InitialMesseges = [
  {
    id: 1,
    source: require("../assets/face1.jpg"),
    title: "Yash",
    subTitle: "I am interseted in buying your ",
  },
  {
    id: 2,
    source: require("../assets/face1.jpg"),
    title: "Henry",
    subTitle: "Any discounts??",
  },
  {
    id: 3,
    source: require("../assets/face1.jpg"),
    title: "Shamith",
    subTitle: "Yes I have recieved the payments!",
  },
];

const Profile = ({ profile }) => (
  <View style={styles.profileContainer}>
    <Image source={profile.source} style={styles.profile}></Image>
  </View>
);

function MessegesScreen() {
  const [Messeges, setMesseges] = useState(InitialMesseges);
  const [refreshing, setRefreshing] = useState(false);
  const deleteHandler = (messegeID) => {
    setMesseges(Messeges.filter((m) => m.id !== messegeID));
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
        <View style={styles.matchesContainer}>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "700" }}
          >
            Matches
          </Text>
          <FlatList
            data={Messeges}
            horizontal
            keyExtractor={(messeges) => messeges.id.toString()}
            renderItem={({ item }) => <Profile profile={item} />}
          />
        </View>
        <View style={styles.messegesContainer}>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "700" }}
          >
            Matches
          </Text>
          <FlatList
            refreshing={refreshing}
            onRefresh={() => {
              setMesseges([
                ...Messeges,
                {
                  id: 1,
                  source: require("../assets/face1.jpg"),
                  title: "User 1",
                  subTitle: "Messeges from new User",
                },
              ]);
            }}
            data={Messeges}
            keyExtractor={(messeges) => messeges.id.toString()}
            ItemSeparatorComponent={Separator}
            
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                subTitle={item.subTitle}
                image={item.source}
                onPress={() => console.log("messege selected:", item)}
                onRightSwipe={() => (
                  <ListItemDeleteIcon
                    onClick={() => deleteHandler(item.id)}
                  ></ListItemDeleteIcon>
                )}
              ></ListItem>
            )}
          />
        </View>
      </View>
    </SafeScreen>
  );
}

export default MessegesScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.backGround,
    height:"100%",
    width:"100%"
  },
  header: {
    display: "flex",
    padding: 20,
    paddingBottom: 10,
  },
  matchesContainer: {},
  logo: {
    height: 37,
    width: 54,
  },
  profile: {
    // marginLeft: 10,
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  profileContainer: {
    marginRight: 15,
    marginTop: 15,
  },
  matchesContainer: {
    padding: 30,
  },
  messegesContainer: {
    padding: 30,
  },
});
