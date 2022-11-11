import React from "react";
import {Text, View,Button,TouchableOpacity,Vibration} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import Styles from "../components/Styles";
const RGBData={
  increaceLight:1,
  decreaceLight:2,
  on:3,
  off:4,
  red:5,
  green:6,
  blue:7,
  white:8,
  orange:9,
  lightGreen1:10,
  lightBlue:11,
  flash:12,
  lightOrange:13, 
  skyBlue:14,
  darkPurple:15,
  strong:16,
  darkYellow:17,
  olive:18,
  purple:19, 
  fade:20,
  yellow:21,
  lightGreen2:22,
  pink:23,
  smoth:24
}
const Send=(v)=>{
  Vibration.vibrate(100);
  console.log(RGBData[v]);
  
const sendPromise= new Promise((resolve,reject)=>{
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         //console.log(this.responseText);
         resolve(this.responseText);
       }
   };
   xhttp.open("GET", "http://192.168.0.192/action1?value="+RGBData[v], true);
   xhttp.send();
})
sendPromise.then((result)=>{
    console.log(`the number of posts is ${result}`)
    return result
})
} //end send function
const RGB =({ navigation })=>{
    return(
   <View style={Styles.mainContainer}>
        <View style={Styles.remoteContainer}>
             <View style={Styles.row}>
             <TouchableOpacity onPress={()=>{Send("increaceLight")}} style={{...Styles.btn2,backgroundColor:"#fff"}}><Text style={{...Styles.btnText,color:"#000"}}><Ionicons name="sunny-sharp" size={34} color="#000" />+</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{Send("decreaceLight")}} style={{...Styles.btn2,backgroundColor:"#fff"}}><Text style={{...Styles.btnText,color:"#000"}}><Ionicons name="sunny-sharp" size={34} color="#000" /> -</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("on")}} style={{...Styles.btn2,backgroundColor:"green"}}><Text style={Styles.btnText}><Ionicons name="power" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("off")}} style={{...Styles.btn2,backgroundColor:"red"}}><Text style={Styles.btnText}><Ionicons name="power" size={34} color="white" /></Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("red")}} style={{...Styles.btn2,backgroundColor:"red"}}><Text style={Styles.btnText}>R</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("green")}} style={{...Styles.btn2,backgroundColor:"green"}}><Text style={Styles.btnText}>G</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("blue")}} style={{...Styles.btn2,backgroundColor:"blue"}}><Text style={Styles.btnText}>B</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("white")}} style={{...Styles.btn2,backgroundColor:"white"}}><Text style={{...Styles.btnText,color:"#000"}}>W</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("orange")}} style={{...Styles.btn2,backgroundColor:"#FA8538"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("lightGreen1")}} style={{...Styles.btn2,backgroundColor:"lightgreen"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("lightBlue")}} style={{...Styles.btn2,backgroundColor:"#4961F9"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("flash")}} style={Styles.btn2}><Text style={Styles.btnText}>flash</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("lightOrange")}} style={{...Styles.btn2,backgroundColor:"orange"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("skyBlue")}} style={{...Styles.btn2,backgroundColor:"#45C6F5"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("darkPurple")}} style={{...Styles.btn2,backgroundColor:"#A20E6C"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("strong")}} style={Styles.btn2}><Text style={Styles.btnText}>stro.</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("darkYellow")}} style={{...Styles.btn2,backgroundColor:"#D5CF0C"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("olive")}} style={{...Styles.btn2,backgroundColor:"#2A7A83"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("purple")}} style={{...Styles.btn2,backgroundColor:"#9129C4"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("fade")}} style={Styles.btn2}><Text style={Styles.btnText}>fade</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("yellow")}} style={{...Styles.btn2,backgroundColor:"#FFF600"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("lightGreen2")}} style={{...Styles.btn2,backgroundColor:"#18EF58"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("pink")}} style={{...Styles.btn2,backgroundColor:"#F60BB0"}}><Text style={Styles.btnText}></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("smoth")}} style={Styles.btn2}><Text style={Styles.btnText2}>smoth</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('TV')}><Text style={Styles.btnText}><Ionicons name="md-tv-outline" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('Conditioner')}><Text style={Styles.btnText}><FontAwesome5 name="fan" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('Home')}><Text style={Styles.btnText}><Ionicons name="home" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2}><Text style={Styles.btnText}></Text></TouchableOpacity>
             </View>
        </View></View>
    )
}

export default RGB;