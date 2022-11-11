import React from "react";
import {Text, View,Button,TouchableOpacity} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Styles from "../components/Styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tempData={
   smart:52,
   
}
const Conditioner =({ navigation })=>{
    return(
   <View style={Styles.mainContainer}>
        <View style={Styles.remoteContainer}>
            <View style={Styles.screen}></View>
             <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}>Smart</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="chevron-up-sharp" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}>Mode</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><FontAwesome5 name="fan" size={34} color="white" />+</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><Ionicons name="power" size={34} color="red" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><FontAwesome5 name="fan" size={34} color="white" /></Text></TouchableOpacity>
            </View>
             <View style={Styles.row}>
                    <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}>iFeel</Text></TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><AntDesign name="down" size={34} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}>sleep</Text></TouchableOpacity>
            </View>
             <View style={Styles.row}>
              <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><FontAwesome5 name="arrows-alt-v" size={44} color="#fff" /></Text></TouchableOpacity>
             <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText}><FontAwesome5 name="arrows-alt-h" size={44} color="#fff" /></Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText2}>clock</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText2}>timer on</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText2}>timer of</Text></TouchableOpacity>
              </View>
             <View style={Styles.row}>
             <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText2}>Quiet</Text></TouchableOpacity>
             <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText2}>Dimmer</Text></TouchableOpacity>
             <TouchableOpacity style={Styles.btn}><Text style={Styles.btnText2}>economy</Text></TouchableOpacity>
             </View>
             <View style={Styles.row}>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('TV')}><Text style={Styles.btnText}><Ionicons name="md-tv-outline" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('RGB')}><Text style={Styles.btnText}><MaterialCommunityIcons name="lightbulb-fluorescent-tube" size={34} color="#fff" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2} onPress={() => navigation.navigate('Home')}><Text style={Styles.btnText}><Ionicons name="home" size={34} color="white" /></Text></TouchableOpacity>
                <TouchableOpacity style={Styles.btn2}><Text style={Styles.btnText}></Text></TouchableOpacity>
             </View>
        </View></View>
    )
}

export default Conditioner;