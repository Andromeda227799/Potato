import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FilterItem from "../components/FilterItem";
import MyListAddNew from "../components/MyListAddNew";
import SafeScreen from "./SafeScreen";
import Dialog from "react-native-dialog";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const filters = [
  {
    name: "Potatoes",
    id: 1,
  },
  {
    name: "Potatoes",
    id: 2,
  },
  {
    name: "Potatoes",
    id: 3,
  },
  {
    name: "Potatoes",
    id: 4,
  },
];

export default function AccountScreen({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const addFilter = () => {
    setSelectedFilters([
      ...selectedFilters,
      {
        id: selectedFilters.length + 1,
        name: inputFilter,
      },
    ]);
    scrollView.current.scrollToEnd();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  const scrollView = React.useRef();
  const [selectedFilters, setSelectedFilters] = React.useState(filters);
  const [inputFilter, setinputFilter] = React.useState("");
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/logoDark.png")}
          ></Image>
        </View>
        <View style={styles.imageNameContainer}>
          <Image
            style={styles.image}
            source={require("../assets/face1.jpg")}
          ></Image>
          <Text
            style={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "700" }}
          >
            Shamith Rao
          </Text>
        </View>
        <View style={styles.filter}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: "700",
              marginBottom: 20,
              marginTop: 5,
            }}
          >
            Looking For :
          </Text>
          <FlatList
            ref={scrollView}
            data={selectedFilters}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <FilterItem
                item={item}
                onPress={() => {
                  setSelectedFilters(
                    selectedFilters.filter((item1) => item1.id != item.id)
                  );
                }}
              />
            )}
          />
          <MyListAddNew onPress={()=>setVisible(true)}/>
        </View>
        <View style={styles.inputContainer}>
          <Text
            style={{
              color: colors.black,
              fontSize: 18,
              marginLeft: 12,
            }}
          >
            {"Email"}
          </Text>
          <AppTextInput
            fontSize={18}
            placeholder="shamith2709@gmail.com"
            setText={setinputFilter}
            placeholderTextColor={colors.black}
          ></AppTextInput>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Logout" onPress={()=>{navigation.navigate("Login")}}/>
      </View>
      </View>
      

      <Dialog.Container visible={visible}>
        <Dialog.Title>Enter a New Filter</Dialog.Title>
        <Dialog.Input
          label="filter"
          onChangeText={(text) => setinputFilter(text)}
        ></Dialog.Input>
        <Dialog.Button label="Add" onPress={()=>{
            addFilter();
            setVisible(false)} }/>
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    padding: 30,
    paddingBottom: 0,
    // flex: 0.000001,
    // backgroundColor:"blue"
    // height: 0,
    // marginBottom: 30,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 60,
    marginBottom: 20,
  },
  container: {
    height: "100%",
    width: "100%",
    //   backgroundColor:"red"
  },
  logo: {
    height: 37,
    width: 54,
  },
  imageNameContainer: {
    alignItems: "center",
    padding: 20,
  },
  filter: {
    paddingLeft: 30,
  },
  inputContainer:{
      padding:30
  },
  buttonContainer:{alignItems:"center"},
});
