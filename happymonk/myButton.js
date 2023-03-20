import React from 'react'
import {useState} from 'react'
import { Text, View, Pressable } from 'react-native'
import styless from "./style"
import { Button } from 'react-native'





const MyButton = (props) => {
    let text = props.text
    let btnContainerStyle = props.btnContainerStyle
    let btnTextStyle = props.btnTextStyle

    const [count , setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1)
      }
    return (
        <>
        <View style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:20,}}><Text style={{fontSize:40}}>MyButton -Component</Text></View>
        <Pressable onPress={increment} activeOpacity={0.7} style={{marginTop:30}}>
            <View style={[btnContainerStyle]}>
                
                <Text style={[btnTextStyle]}> {text} </Text>
            </View>
        </Pressable>
        <View>
            <Text  style={styless.countTxt}>{count}</Text>
        </View>
        <Button title="Go To MyList Component" onPress={()=>props.navigation.navigate("Section-B (MyList)")}></Button>
       <View style={{marginTop:30}}><Button title="Check Temperature" onPress={()=>props.navigation.navigate("Weather")}></Button></View> 
       
       <View style={{marginTop:30}}><Button title="Check My Profile" onPress={()=>props.navigation.navigate("ProfileScreen")}></Button></View> 
       
       {/* <View style={{marginTop:30}}><Button title="Custom Hook" onPress={()=>props.navigation.navigate("CustomHook")}></Button></View>  */}
       
       <View style={{marginTop:30}}><Button title="Image Picker" onPress={()=>props.navigation.navigate("ImagePicker")}></Button></View> 
       
       {/* <View style={{marginTop:30}}><Button title="Image Picker" onPress={()=>props.navigation.navigate("ImagePicker")}></Button></View>  */}
       
       <View style={{marginTop:30}}><Button title="PasswordGenerator" onPress={()=>props.navigation.navigate("PasswordGenerator")}></Button></View> 
       
       
       
        </>
    )
}

export default MyButton;