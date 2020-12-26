import React, { useState }  from 'react';
import { StyleSheet,View,Text} from 'react-native';
import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from './screens/GameOverScreen'
import * as Font from "expo-font"
import {AppLoading } from "expo"

const fetchFonts=()=>{
   Font.loadAsync({
     "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
     "open-sans-Bold":require("./assets/fonts/OpenSans-Bold.ttf")
   })
  }
 
export default function App() {

  const [userNumber,setUserNumber]=useState()
  const [guessRounds,setGuessRounds]=useState()
  const [loading,setLoading]=useState(false)

  if(!loading){
    return <AppLoading 
    startAsync={fetchFonts} 
    onFinish={()=>setLoading(true)}
    onError={error=>console.log(error)}
    />
  }
  const startGameHandler=(number)=>{
    setUserNumber(number)
  }

  const guessRoundsHandler=(rounds)=>{
    setGuessRounds(rounds)
  }
  const handleNewGame=()=>{
    setUserNumber(undefined),
    setGuessRounds(0)
  }

  let content =<StartGameScreen  startGameHandler={startGameHandler}/>

  if(userNumber&& guessRounds === 0 ){
    content=<GameScreen choice={userNumber}  guessRoundsHandler={guessRoundsHandler}  />
  }else if (guessRounds > 0){
    content=<GameOverScreen numRounds={guessRounds}  handleNewGame={handleNewGame} number={userNumber}/>
  }
  
 
  return (
    <View style={styles.container}>
      <Header title="Guess A Number " />
       {content}
       
    </View>
  );

  }
const styles = StyleSheet.create({
  container: {
    flex:1,
   
  }, 
  
});
