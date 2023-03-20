/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import styless from "./style"
import { useState,useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SectionBase

} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MyButton from './myButton';
import List from './myList';
import Weather from './Weather';
import ProfileScreen from './ProfileScreen';
import CustomHook from './CustomHook';
import ImagePicker from './ImagePicker';
import PasswordGenerator from './PasswordGenerator';

const Stack = createNativeStackNavigator();
function App(){

  

  let listItems = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]
  let profile = 
    {name:'Anil',
    age:26,
    address: 'Delhi',
    phone: 123456789
}
  
  const increment = ()=>{
    setCount(count+1)
  }

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#146C94'},
          headerTitleStyle:{fontSize:30},
          headerTintColor:'white'
        }}>
        <Stack.Screen name='Section-B (MyButton)'>
         {(props) => <MyButton {...props} text={'Click Me'} btnContainerStyle={styless.btnContainerStyle}  btnTextStyle={styless.btnTextStyle}  />}
         </Stack.Screen>


         <Stack.Screen name='Section-B (MyList)' >
         {(props) => <List {...props} listItems={listItems}  />}
         </Stack.Screen>


         <Stack.Screen name='Weather' >
         {(props) => <Weather {...props}  />}
         </Stack.Screen>


         <Stack.Screen name='ProfileScreen' >
         {(props) => <ProfileScreen {...props} userInfo={profile}  />}
         </Stack.Screen>

         <Stack.Screen name='CustomHook' >
         {(props) => <CustomHook {...props}   />}
         </Stack.Screen>


         <Stack.Screen name='ImagePicker' >
         {(props) => <ImagePicker {...props}   />}
         </Stack.Screen>

         <Stack.Screen name='PasswordGenerator' >
         {(props) => <PasswordGenerator {...props}   />}
         </Stack.Screen>

         
         
         
      </Stack.Navigator>
    </NavigationContainer>


    // <SafeAreaView>
      
    // <View>
    //    <Text style={{fontSize:40, marginTop:15, color:'black',marginBottom:30,marginLeft:100}}>HappyMonk</Text>
       
       
    //    {/* Button */}
    //    {/* <Text style={styless.countTxt}>MyButton</Text> */}
    //    <Button text={'Click Me'} btnContainerStyle={styless.btnContainerStyle}  btnTextStyle={styless.btnTextStyle}  onPress={increment}></Button>
    //    
    // <Text style={styless.countTxt}>{count}</Text>
       
    //    <Text style={styless.countTxt}>Mylist</Text> 
    //    <List listItems={listItems}></List>

    //    <ScrollView>
    //    <Text style={{fontSize:40}}>{temp}</Text>
       
    //    </ScrollView>
       
    // </View>
    
    // </SafeAreaView>
  
  )
}
export default App;
