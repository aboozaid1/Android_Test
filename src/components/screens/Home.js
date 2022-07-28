import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Post from '../screen components/Post';

const Home = () => {
  return (
    <View style={{backgroundColor : "white", height : '100%'}}>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} animated = {true} /> 
      <View style={{justifyContent : "center", flexDirection : "row"}}>
        <Text style={{fontSize : 24, fontWeight :  "500"}}>ANDROID TEST</Text>
        
      </View>
        <ScrollView>
        <Post/>
        </ScrollView>
      
    </View>
  )
}

export default Home