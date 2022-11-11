import React from "react";
import {Text, View,Button,TouchableOpacity,ScrollView,Vibration} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Styles from "../components/Styles";

const TVData={
   power:25,
   mute:26,
   decreaceSound:27,
   source:28,
   increaceSound:29,
   home:30,
   up:31,
   youtube:32,
   left:33,
   ok:34,
   right:35,
   menu:36,
   down:37,
   back:38,
   red:39,
   green:40,
   yellow:41,
   blue:42,
   prev:43,
   pause:44,
   next:45,
   hold:46,
   stop:47,
   supage:48,
   settings:49,
   empty:50,
   files:51
}
const Send=(v)=>{
   Vibration.vibrate(100);
   console.log(TVData[v]);
   
 const sendPromise= new Promise((resolve,reject)=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(this.responseText);
          resolve(this.responseText);
        }
    };
    xhttp.open("GET", "http://192.168.0.192/action1?value="+TVData[v], true);
    xhttp.send();
 })
 sendPromise.then((result)=>{
     console.log(`the number of posts is ${result}`)
     return result
 })
 } //end send function
const TV =({ navigation })=>{
    return(
<ScrollView>
   <View style={Styles.mainContainer}>
        <View style={Styles.remoteContainer}>
             <View style={{...Styles.row,justifyContent:"space-between"}}>
                <TouchableOpacity onPress={()=>{Send("power")}} style={{...Styles.btn,backgroundColor:"red"}}><Text style={Styles.btnText}><Ionicons name="power" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("mute")}} style={Styles.btn}><Text style={Styles.btnText}> <Ionicons name="md-volume-mute-sharp" size={34} color="wite" /> </Text></TouchableOpacity>
             </View>
             
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("decreaceSound")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="volume-medium" size={34} color="white" />-</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("source")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="log-in" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("increaceSound")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="volume-medium" size={34} color="white" />+</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("home")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="home" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("up")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="chevron-up-sharp" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("youtube")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="logo-youtube" size={40} color="red" /></Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("left")}} style={Styles.btn}><Text style={Styles.btnText}><AntDesign name="left" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("ok")}} style={Styles.btn}><Text style={Styles.btnText}>OK</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("right")}} style={Styles.btn}><Text style={Styles.btnText}><AntDesign name="right" size={34} color="white" /></Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("menu")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="menu" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("down")}} style={Styles.btn}><Text style={Styles.btnText}><AntDesign name="down" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("back")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="arrow-redo-sharp" size={34} color="white" /></Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("red")}} style={{...Styles.btn,backgroundColor:'red',width:"20%"}}><Text style={Styles.btnText}>A</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("green")}} style={{...Styles.btn,backgroundColor:'green',width:"20%"}}><Text style={Styles.btnText}>B</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("yellow")}} style={{...Styles.btn,backgroundColor:'yellow',width:"20%"}}><Text style={Styles.btnText}>C</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("blue")}} style={{...Styles.btn,backgroundColor:'blue',width:"20%"}}><Text style={Styles.btnText}>D</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("prev")}} style={Styles.btn}><Text style={Styles.btnText}>←</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("pause")}} style={Styles.btn}><Text style={Styles.btnText}>▶</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("next")}} style={Styles.btn}><Text style={Styles.btnText}>→</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("hold")}} style={Styles.btn}><Text style={Styles.btnText}>«</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("stop")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="stop" size={24} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("supage")}} style={Styles.btn}><Text style={Styles.btnText}>»</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity onPress={()=>{Send("settings")}} style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="settings" size={34} color="whte" /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("empty")}} style={Styles.btn}><Text style={Styles.btnText2}>S.Mode</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{Send("files")}} style={Styles.btn}><Text style={Styles.btnText}><AntDesign name="folder1" size={34} color="white" /></Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('RGB')}><Text style={Styles.btnText}><MaterialCommunityIcons name="lightbulb-fluorescent-tube" size={34} color="#fff" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('Conditioner')}><Text style={Styles.btnText}><FontAwesome5 name="fan" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('Home')}><Text style={Styles.btnText}><Ionicons name="home" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2}><Text style={Styles.btnText}></Text></TouchableOpacity>
             </View>
             <View style={{height:80}}><Text> </Text></View>
        </View></View></ScrollView>
    )
}

export default TV;