import React from 'react'
import {useState,useEffect} from 'react'
import { Text, View } from 'react-native'



const Weather = () => {
    const [temp, setTemp] = useState(0);
    const lat =  28.7041
    const lon = 77.1025


    const getTemp = async (lat,lon) => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6cba658978c22d0338db1bebbb563733`);
          const json = await response.json();
          // console.log(json);
          // console.log(json.main.temp);
          let f = json.main.temp;
          let c  = f - 273.15;
          c = Math.ceil(c);
          // console.log(c)
          setTemp(c);
          // console.log(temp)
        } catch (error) {
          console.error(error);
        } 
      };
    
      useEffect(() => {
        getTemp(lat,lon);
        
      }, []);
    return(
        <View style={{display:'flex',alignItems:'center',marginTop:30}}>
            <Text style={{fontSize:40}}>Temperature Of Delhi</Text>
            <Text style={{marginTop:50,fontSize:80,color:'blue'}}>{temp}°C</Text>
        </View>
    )
}


export default Weather;