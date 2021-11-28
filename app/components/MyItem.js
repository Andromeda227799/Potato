import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

export default function MyItem({item}) {
    return (
        <View style={styles.container}>
            {console.log(item)}
            <Image style={styles.image} source={item.image}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Item : {item.Item}</Text>
                <Text style={styles.text}>Quantity : {item.min} - {item.max}</Text>
                <Text style={styles.text}>Distance : less than {item.distance} km</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flexDirection:'row',
        padding:20,
        marginVertical:14,
        borderRadius:20,
        alignItems:'center'
    },
    image:{
        height:70.7,
        width:100,
        resizeMode:'contain',
        borderRadius:20,
    },
    textContainer:{
        marginLeft:15,
    },
    text:{
        fontFamily:"Roboto",
        fontWeight:"700",
        fontSize:13
    },
})
