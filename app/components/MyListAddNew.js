import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function MyListAddNew({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>

            <AntDesign name="pluscircle" size={30} color={colors.primary} />
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        width:"100%",
        alignItems:"center"
    }
})
