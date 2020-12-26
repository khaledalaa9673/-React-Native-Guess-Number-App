import React from "react"
import {View ,StyleSheet} from "react-native"


export default function Card(props){

    return (
        <View style={{...styles.card,...props.style}}>
             {props.children}
        </View>
    )

}

const styles=StyleSheet.create({
  card:{ 
    backgroundColor:"white",
    shadowColor:"black",
    shadowOffset:{width:5,height:5},
    shadowRadius:5,
    shadowOpacity:.3,
    elevation:6,
    padding:10,
    borderRadius:10
}

})