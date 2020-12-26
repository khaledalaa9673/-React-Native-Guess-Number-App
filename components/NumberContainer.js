import React from "react"
import {View,Text ,StyleSheet} from "react-native"
import Colors from "../constants/Colors"
 


export default function NumberCointainer(props){

    return (
        <View style={{...props.style, ...styles.cointainer}}>
            <Text style={styles.text} >{props.number}</Text>
        </View>
    )

}

const styles=StyleSheet.create({
     
     cointainer:{
         borderRadius:2,
         borderColor:Colors.color_pink,
         borderWidth:2,
         padding:8,
         marginVertical:5
         
    },
    text:{
        fontSize:20,
        letterSpacing:2,
        fontWeight:"bold"
    }    
})


