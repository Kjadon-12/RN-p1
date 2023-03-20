import React from 'react'
import { Text, View, FlatList } from 'react-native'





const List = ({ listItems }) => {

    return (
      <>
        <View style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:20,}}><Text style={{fontSize:40}}>MyList -Component</Text></View>
        <FlatList style={{marginLeft:150,marginTop:30}}
        data={listItems}
        renderItem={({item}) => <Text style={{fontSize:20,color:'blue'}}>{item.key}</Text>}
      />
      </>
        
    )
}

export default List;