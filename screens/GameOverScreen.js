import React from "react"
import {View,Text ,StyleSheet, Button,Image} from "react-native"
import Colors from "../constants/Colors"



export default function GameOverScreen(props){

    return (
        <View style={styles.screen} >
            <Text style={{fontFamily:"open-sans-Bold"}}>The Game Is Over  </Text>
            <Image
            fadeDuration={2000}
            source={require("../assets/success.png")}
            style={styles.image}
             
             />
            <Text>Number Of Rounds   {props.numRounds}</Text>
            <Text>Number Was  {props.number}</Text>
            <Button title="NEW GAME" onPress={()=>props.handleNewGame()}/>
        </View>
    )

}

const styles=StyleSheet.create({
 screen:{
     flex:1,
     justifyContent:"flex-start",
     alignItems:"center",
     
     
 },
 image:{
     width:300,
     height:300,
     borderRadius:150
 }

})