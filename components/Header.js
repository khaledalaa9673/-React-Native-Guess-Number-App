import React from "react"
import {View,Text ,StyleSheet} from "react-native"
import Colors from "../constants/Colors"


export default function Header(props){

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )

}

const styles=StyleSheet.create({
    header:{
         width:"100%",
         height:100,
         backgroundColor:Colors.color_pink,
         justifyContent:"center",
         alignItems:"center",
         marginBottom:10
   

    },
    headerTitle:{
        color:"black",
        fontWeight:"bold",
        fontSize:22,
        paddingTop:25

    }

})