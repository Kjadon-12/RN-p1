import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = async ()=>{
        await AsyncStorage.getItem("theme")
      }
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect( async (defaultValue) => {
      await AsyncStorage.setItem("theme",value)
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;






























// const useLocalStorage = (key, defaultValue) => {
    
    

//     const setData = async (key,defaultValue)=>{
//       await  AsyncStorage.setItem(key, defaultValue)
//     }
  
//     const getData = async (key)=>{
//         await AsyncStorage.getItem(key)
//         console.log(key, defaultValue);
//     }
    
  


// };

// export default useLocalStorage;
