import React, { useCallback, useEffect, useRef, useState } from "react"
import {View,Text ,StyleSheet, Button, Alert, ScrollView} from "react-native"
import Colors from "../constants/Colors"
import NumberContainer from "../components/NumberContainer"
import Card from "../components/Card"
 


const generateRandomBetween=(min , max ,exclude)=>{
 
  
    const RN=Math.floor(Math.random() * (max - min )) + min
    if(RN === exclude){
        return generateRandomBetween(min,max,exclude)

    }else{
        
        return RN
    }
}


export default function GameScreen(props){
  
     const [currentGuess,setCurrentGuess]=useState()
     const [rounds,setRounds]=useState(0)
     const [guesses,setGuessList]=useState([])
     const currentLow=useRef(0)
     const currentHigh=useRef(100)
     
     useEffect(()=>{
        setCurrentGuess(generateRandomBetween(1,100,props.choice))
         
       
     },[])

     const nextGuessHandler=(direction)=>{
      if(direction === "lower" && currentGuess < props.choice
       || direction === "greater" && currentGuess > props.choice ){
           Alert.alert("Donot Lie","please enter the corrent hint to can guess true",
           [{text:"SORRY",style:"destructive"}])
           return
       }
       if(direction==="lower"){
           currentHigh.current=currentGuess
           
       }else {
        currentLow.current=currentGuess
    }
   
       const NextGuess=generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
       setCurrentGuess(NextGuess)
 
     } 
     useEffect(()=>{
        if(currentGuess){
            setGuessList([...guesses,currentGuess])
        }
        setRounds(r=>r+1)
         
      if(currentGuess === props.choice){
          props.guessRoundsHandler(rounds)
          console.log(guesses)
      }

     },[currentGuess])

    return (
        <View style={styles.Screen}>
            <View style={styles.Textbox}><Text style={styles.text}>computer  guess</Text></View>
            <NumberContainer style={styles.numberContainer} number={currentGuess}></NumberContainer>
            <Card style={styles.buttnGroup}>
                <Button style={styles.btn} title="LOWER" onPress={nextGuessHandler.bind(this,"lower")}></Button>
                <Button style={styles.btn} title="GREATER" onPress={nextGuessHandler.bind(this,"greater")}></Button>
            </Card>
            <View style={styles.boxContainer} >
            <ScrollView  contentContainerStyle={styles.boxlist} >
               {
                   guesses.length > 1 &&guesses.map((guess,index)=>{
                       return <View style={styles.box}  key={index}><Text>{guess}</Text></View>
                   })
               }

            </ScrollView>
            </View>
        </View>
    )

}

const styles=StyleSheet.create({
    Screen:{
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"flex-start",
      flexWrap:"wrap",
       
    },
    Textbox:{
    width:"90%", 
    alignItems:"center"
    },
    numberContainer:{

         width:"21%",
         alignItems:"center",
         marginTop:15
         
    },
    buttnGroup:{
        width:"80%",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:15,
        padding:20
    },
    btn:{
     width:"30%"
    },
   text:{
       fontSize:18,
       fontWeight:"bold"
   },
 
    boxContainer:{
        
        width:"80%",
        height:400,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start",

   },
  boxlist:{
       alignItems:"center"
   },
   box:{
       width:"80%",
       height:50,
       borderWidth:2,
       alignItems:"center",
       padding:5,
       margin:5


   }

})