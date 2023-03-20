import { Button, View } from "react-native";
import useLocalStorage from "./useLocalStorage";



function CustomHook(){
    
     
const [theme, setTheme] = useLocalStorage("theme", "dark");
    return(
        <View>
           <Button onPress={() => theme === "light" ? setTheme("dark") : setTheme("light")} title="Toggle theme"></Button>
        </View>
    )
}

export default CustomHook
