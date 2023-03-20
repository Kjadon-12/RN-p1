import React from 'react'

import { Text, View ,Image} from 'react-native'



const ProfileScreen = (props) => {
    return(
        <View style={{display:'flex',alignItems:'center',marginTop:30}}>
            <Image source={require('./customer3.png')}></Image>
            <Text style={{fontSize:40}}>Name-{props.userInfo.name}</Text>
            <Text style={{marginTop:30,fontSize:40}}>Age-{props.userInfo.age}</Text>
            <Text style={{marginTop:30,fontSize:40}}>Mobile-{props.userInfo.phone}</Text>
            <Text style={{marginTop:30,fontSize:40}}>Address-{props.userInfo.address}</Text>
        </View>
    )
}


export default ProfileScreen;