import {react,useState} from "react";
import { View,Text,TextInput,Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from "../components/Styles";
/*
const [flag1, setFlag1] = useState(true);
const[ip,setIp]=useState();
const[ipModal,setIpModal]=useState(false);

//set the ip
const setTheIp= async()=>{
    setIpModal(false);
    try {
      if(ip !=""){
      Keyboard.dismiss();
      //setIp(ip)
      return await AsyncStorage.setItem('ip', JSON.stringify(ip));
      }
      else{
           alert('enter a valid ip');
           setIpModal(true);
         }
  } catch (error) {
    alert(error.message);
  }
  }
  
  async function checkUserSignedIn(){
    try {
       let value = await AsyncStorage.getItem('ip');
       if (value != null && value != ""){
        setIp(JSON.parse(value));
        setIpModal(false);
      }
       else {
        setIpModal(true);
      }
    } catch (error) {
      alert(error);
    }
  }
  if(AsyncStorage.getItem('ip') && AsyncStorage.getItem('ip') !=""){
    if(flag1){
    setFlag1(false);
    checkUserSignedIn();
  }}
  */
export default function SetIp(){
return(
    <View>
    <Text>
    :قم بإدخال عنوان IP جديد للجهاز
    </Text>
    <TextInput placeholder="192.168.0.111">

    </TextInput>
    <Button title="حفظ"/>
</View>
)
}