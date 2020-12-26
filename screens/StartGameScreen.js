import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
}
  from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"

export default function StartGameScreen(props){
  const [enteredNumber,setEnteredNumber]=useState("")
  const [confirmed ,setConfirmed]=useState(false)
  const [selectedNumber,setSelectedNumber]=useState()
   
  const inputNumberHandler=(inputText)=>{
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""))
  }

  const resetEnteredNumbr=()=>{
    setEnteredNumber("")
  }
  const confirmEnteredNumber=(number)=>{
    if(+number === NaN || number <= 0 || number > 99 ){
      Alert.alert("Invaild Number","Number Must Be from 0 to 99",[{text:"Okay",style:"cancel",onPress:resetEnteredNumbr}])
      return 

    }
    setSelectedNumber(+number)
    setConfirmed(true)
    setEnteredNumber("")
    Keyboard.dismiss()
      
  } 
   let confirmedOutput
   if(confirmed){
    confirmedOutput=
      <Card style={styles.miniCard}><Text>YOU SELECT</Text>
        <NumberContainer  number={selectedNumber}/>
        <Button   
          title="Start Game"
          onPress={()=>{
          props.startGameHandler(selectedNumber)
          }
          }/>
      </Card>
   }

    return (
      <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}} >
        <View style={styles.screen}>
          <Text  style={styles.screenTitle}>Start A Game!</Text>
          <Card style={styles.inputContainer}> 
            <Text>Select A Number</Text>
            <View style={styles.input}>
              <TextInput 
               value={enteredNumber}
               onChangeText={inputNumberHandler}
               blurOnSubmit
               autoCapitalize="none"
               autoCorrect={false} 
               maxLength={2}
               keyboardType="number-pad"
               style={styles.inputText}
            /></View>
            <View style={styles.buttonGroup}>
              <View style={styles.btn}><Button   title="reset" onPress={resetEnteredNumbr}/></View>
              <View style={styles.btn}><Button   title="confirm" onPress={()=>{confirmEnteredNumber(enteredNumber)}}/></View>
            </View>
          </Card>
           {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>  
    )

}

const styles=StyleSheet.create({
   screen:{
     flex:1,
     padding:10,
     alignItems:"center",
     justifyContent:"flex-start",
    

   },
  inputContainer:{
    width:"80%",
    alignItems:"center",
   
  },
   screenTitle:{
     fontSize:24,
     marginVertical:5
   },
   input:{
     width:"60%",
     height:35,
     borderColor:"#f7287b",
     borderWidth:1,
     backgroundColor:Colors.color_white,
     margin:8
   },
   inputText:{
     textAlign:"center",
     fontSize:20
   },
   buttonGroup:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
   }, 
   btn:{
     width:"30%"
   },
   miniCard:{
    alignItems:"center",
    width:"50%",
    marginTop:20,
    height:150,
    maxHeight:"40%"
   } 

})