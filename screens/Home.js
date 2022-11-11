import React from "react";
import {Text, View, Button, TouchableOpacity, Image} from "react-native";
import Styles from "../components/Styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Home =({ navigation })=>{
    return(
            <View style={Styles.remoteContainer}>
             <View style={Styles.row}>
                <TouchableOpacity style={{...Styles.btn,height:100}}  onPress={() => navigation.navigate('TV')}><Ionicons name="md-tv-outline" size={34} color="white" /><Text style={Styles.btnText}>التلفاز</Text></TouchableOpacity>
                <TouchableOpacity style={{...Styles.btn,height:100}}><MaterialCommunityIcons name="lightbulb-fluorescent-tube" size={34} color="#fff" /><Text style={Styles.btnText} onPress={() => navigation.navigate('RGB')}>الدايود</Text></TouchableOpacity>
                <TouchableOpacity style={{...Styles.btn,height:100}}><FontAwesome5 name="fan" size={34} color="white" /><Text style={Styles.btnText}  onPress={() => navigation.navigate('Conditioner')}>السبلت</Text></TouchableOpacity>
             </View>
            </View>
    )
}


export default Home;