import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Colors from "./Colors";
var darkMode=true;
const Styles=StyleSheet.create(
    {
        mainContainer:{
                flex:1,
                alignItems:"center",
                                
        },
        remoteContainer:{
            backgroundColor: darkMode? Colors.dark:Colors.light ,
            flex:1,
            flexDirection:"column",
            justifyContent:"space-between",
            width:"100%",
            paddingTop:5
        },
        row:{
            flex:1,
            flexDirection:"row",
            justifyContent:"space-around",
            paddingTop:10
        },
        btn:{
            backgroundColor: darkMode? Colors.buttonDarkBackground:Colors.buttonLightBackground ,
            width:"30%",
            height:55,
            borderRadius:15,
            justifyContent:"center",
            alignItems:"center",
        },btn2:{
            backgroundColor: darkMode? Colors.buttonDarkBackground:Colors.buttonLightBackground ,
            width:"20%",
            height:55,
            borderRadius:15,
            justifyContent:"center",
            alignItems:"center",
        },
        btnText:{
            color:darkMode? Colors.darkColor:Colors.lightColor,
            fontSize:30,
        }, 
        btnText2:{
            color:darkMode? Colors.darkColor:Colors.lightColor,
            fontSize:20,
        },
        screen:{
            height:"15%",
            width:"85%",
            backgroundColor:"#cccc00",
            flex:1,
            alignSelf:"center"
        },
        homeImage:{
            width: "30%",
            height: 200,
            position:"relative"
        }
    }
)

export default Styles;