import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "./src/components/screens/Home";
import Discover from "./src/components/screens/Discover";
import Notifications from "./src/components/screens/Notifications";
import Profile from "./src/components/screens/Profile";
import Reels from "./src/components/screens/Reels";
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from 'react-native-vector-icons/AntDesign'

const App = () => {

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();



  const bottomTabScreen = () => {
    return(
      <Tab.Navigator screenOptions = {({route}) => ({
        tabBarShowLabel:false,
        headerShown : false,
        tabBarStyle:{ height: 50}, 
        tabBarIcon : ({focused, size, colour}) => {
          let iconName;
           if(route.name === "Home"){
              iconName= focused ? "home" : "home-outline";
              size = focused ? size + 8 : size + 2;
           } else if (route.name === "Discover"){
            iconName = focused ? "search" : "ios-search-outline";
           }
           else if (route.name === "Reels"){
            iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline";
           }
           else if (route.name === "Notifications"){
            iconName = focused ? "ios-heart" : "ios-heart-outline";
           }
           else if (route.name === "Profile"){
            iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
           }



           return <Ionic name={iconName} size={size} color={colour}/>
        }


      })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Discover' component={Discover} />
        <Tab.Screen name='Reels' component={Reels} />
        <Tab.Screen name='Notifications' component={Notifications} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    )
  }


  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name='Bottom' component={bottomTabScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App