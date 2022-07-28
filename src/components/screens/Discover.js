import { View, Text, StatusBar, TextInput, Button } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchContent from '../screen components/SearchContent';

const Discover = () => {
  return (
    <View style={{backgroundColor : "white", height : '100%'}}>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} animated = {true} /> 
      <View style={{alignItems : "center", flexDirection : "row", borderColor : "gray", borderBottomWidth : 1,borderRightWidth : 1,borderLeftWidth : 1, borderBottomStartRadius : 10, borderBottomEndRadius : 10, paddingBottom: 15}}>
        <AntDesign name='search1' style={{fontSize : 30, marginLeft: 20, marginRight: 10}}></AntDesign>
        <TextInput placeholder='Search....' style={{opacity : 0.5, borderColor : "black", borderWidth : 1, borderRadius : 10, width : "70%", padding : 5}}></TextInput>
      </View>
      
      <SearchContent/>
    </View>
  )
}

export default Discover