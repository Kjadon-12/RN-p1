import React  from 'react';
import { View, Text, Button,Image } from 'react-native';
import  {useState} from 'react';
import { launchImageLibrary} from 'react-native-image-picker';



const ImagePicker = ()=>{

    const [imageUri, setImageUri] = useState('')

    const openGallery = ()=>{
        const options = {
            storageOptions:{
                path:'images',
                mediaType:'photo',
            },
            includeBase64: true
        }


        launchImageLibrary(options,(response) => {
            // console.log('response==============',response.assets[0].uri);
               
            
              const imgP =  response.assets[0].uri ;
          
              
              setImageUri(imgP)
            
          });
        
    }
    return(
        <>

<View style={{display:'flex',alignItems:'center',marginTop:30}}>
<Text style={{fontSize:40}}>ImagePicker</Text>
</View>    
        <View style={{flex:1}}>
           
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',alignSelf:'center', flex:1}}>
                <Button title="Image Picker" onPress={()=>{openGallery()}}></Button>
                <Image source={{uri :imageUri}} style={{height:200,width:200,borderRadius:100,borderColor:'black',borderWidth:2,marginTop:10}}></Image>
           
            </View>
           
            
        </View>
        
        
        </>
    )
}

export default ImagePicker;