import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function CustomPotatoIcon({color}) {
    return (
        <View>
            
           {Boolean(color=="#8200cf")&& <Image style={styles.icon} source={require("../assets/logoDark.png")}></Image>}
           {Boolean(color!="#8200cf")&& <Image style={styles.icon} source={require("../assets/greyPotato.png")}></Image>}
        </View>
    )
}

const styles = StyleSheet.create({

    icon:{
        height:32,
        width:40,
        resizeMode:'contain'
    },
})
