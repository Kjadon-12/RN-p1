import { StyleSheet } from "react-native";

export default StyleSheet.create({
    btnTextStyle:{
        //width: 42,
        //height: 23,
        //left: 165px;
        //top: 659px;
    
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 22,
        /* identical to box height */
    
    
        color: 'white',
        textTransform: 'capitalize',
        textAlign: 'center',
        
      },
      btnContainerStyle:{
        width: 407,
        height: 53,
        //left: 54,
        //top: 649,
        
        justifyContent: 'center',
        backgroundColor: '#0b2b5c',
        borderRadius: 10,
        paddingVertical: 8
      },


      container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        textColor: 'yellow',
        alignItems: 'center',
    
      //   // justifyContent: 'center',
       },
      title: {
        marginTop:'25px',
       // marginLeft:'50%'
        
        
      },
      btnbox:{
        border: '2px solid black',
        position:'relative',
        left:'4px',
        padding:'25px'
      },
      mybtnTitle:{
        display:'flex', 
        justifyContent:'center'
      },
      countTxt:{
        fontSize:50,
        marginTop:10,
        marginLeft: 170,
        color: 'black'
        // display:'flex',
        // justifyContent:'center'
      }
    
})