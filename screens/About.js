import react,{useState,useContext,useEffect} from "react";
import { ThemeContext } from "../components/ThemeContect";
import useThemeStyles from "../components/Styles";
import {View,Text,TouchableOpacity, ScrollView, I18nManager, Image,StyleSheet} from 'react-native';
import Colors from "../components/Colors";

 const About = ()=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const {theme}=useContext(ThemeContext)
    let activeColor=Colors[theme.mode];
    const Styles = useThemeStyles(theme);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const thumbStyle = {
        width: 120,
        height: 120,
        borderRadius: 10,
        backgroundColor: isEnabled ? '#fff' : '#000',
        borderColor: isEnabled ? '#000' : '#fff',
        borderWidth: 1,
      };
    return(
    <View 
    style={{...Styles.body,flex:1,alignItems:"center",justifyContent:"center"}}
    >       
    <Text style={{color:activeColor.fontColor,fontWeight:"bold",fontSize:20}}>
      ضياء
      </Text>     
      <Text style={{color:activeColor.fontColor,fontWeight:"bold",fontSize:20}}>
      07717124094
     </Text>
     <Image source={require("../assets/acsd.png")} 
               style={Styles.acsd}
               resizeMode="contain"
               />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    }, 
     thumbOn: {
        width: 30,
        height: 130,
        borderRadius: 30 / 2,
        backgroundColor: "green"
      },
      thumbOff: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: "red"
      },
      switch: {
        transform: [{ scaleX: 2 }, { scaleY: 2 }],
        borderRadius: 20,
        width: 70,
        height: 140,
      },
    
    
    
    
    
  });
export default About