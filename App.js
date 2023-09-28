import * as React from 'react';
import { useState,useEffect } from 'react';
import { Button, View, Text, I18nManager } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import Colors from './components/Colors';
import Settings from './screens/Settings';
import Login from './screens/Login';
import NewPassword from './screens/NewPassword';
import Remote from './screens/RemoteControl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import NewSSID from './screens/NewSSID';
import Questions from './screens/Questions';
import Theme from './screens/Theme';
import { ThemeContext } from './components/ThemeContect';
import { storeData,getData } from './components/asyncSrorage';
import * as SplashScreen from "expo-splash-screen"
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [userName, setUserName] = React.useState('');
  const { activeColor } = props;
  React.useEffect(() => {
    AsyncStorage.getItem('userName').then((name) => {
      setUserName(name);
    });
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isloggedin');
    // Navigate to the Login screen
    props.navigation.navigate('تسجيل الدخول');
  };
 
  return (
    <View style={{ flex: 1, backgroundColor: activeColor.mainColor }}>
      <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>
          متصل بإسم {userName}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <Button title="تسجيل الخروج" onPress={handleLogout} />
    </View>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check if the user is logged in
    AsyncStorage.getItem('isloggedin').then((value) => {
      setIsLoggedIn(value === 'true');
    });
  }, []);


  const [theme,setTheme]=useState({mode:"color1"});
  let activeColor=Colors[theme.mode];
  const updateTheme=(newTheme)=>{
    if(!newTheme){
      newTheme="color1"
    }
    setTheme({ mode: newTheme});
    storeData("appTheme",newTheme);
  }
  const retriveTheme=async ()=>{
    let storedTheme= await getData("appTheme");
    if(storedTheme)
      updateTheme(storedTheme);
    SplashScreen.hideAsync();
  }
  useEffect(()=>{
    try{
      retriveTheme();
    }
    catch({e}){
      console.log(e);
    }
  },[]);

  return (
    <ThemeContext.Provider value={{theme,updateTheme}}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'Home'}
        drawerContent={(props) => <CustomDrawerContent {...props} activeColor={activeColor} />}
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: activeColor.mainColor,borderBottomEndRadius:20,borderBottomStartRadius:20 },
          drawerActiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor:"#fff",
          drawerStyle: { 
            marginTop:0
           },
          headerTitleStyle:{color:"#fff", fontWeight:"bold"},
          headerTitleAlign:"center",
          headerTintColor:"#fff",
          drawerPosition: 'right', 
        }}
      >
      <Drawer.Screen name="الرئيسية" component={Home}   
      options={{
      drawerIcon: ({ color, size }) => (
      <FontAwesome name="home" color={color} size={size} />
        ),
      }}/>
      <Drawer.Screen name="الإعدادات" component={Settings}   
      options={{
      drawerIcon: ({ color, size }) => (
      <Ionicons name="settings-outline" size={size} color={color} />
        ),
        swipeEnabled:true,
      }}/>
      <Drawer.Screen name="تسجيل الدخول" component={Login}   options={{
        drawerIcon: ({ color, size }) => (
      <Entypo name="login" size={24} color="white" />
        ),
        headerLeft:null, 
        swipeEnabled:false,
        headerShown: false, //hide the header
        drawerItemStyle: { display:'none' }//hide this item from the menu
      }}/>
      <Drawer.Screen name="كلمة سر جديدة" component={NewPassword}   options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="reload" size={24} color="white" />
        ),
        swipeEnabled:true,
        drawerItemStyle: { display:'none' }//hide this item from the menu
      }}/>
      <Drawer.Screen name="تغيير اسم الشبكة" component={NewSSID} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="reload" size={24} color="white" />
        ),
        swipeEnabled:true,
        drawerItemStyle: { display:'none' }//hide this item from the menu
      }}/>
      <Drawer.Screen name="ريموت كُنترول" component={Remote} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="reload" size={24} color="white" />
        ),
        swipeEnabled:true,
        drawerItemStyle: { display:'none' }//hide this item from the menu
      }}/>

<Drawer.Screen name="ألوان التطبيق" component={Theme} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="reload" size={24} color="white" />
        ),
        swipeEnabled:true,
        drawerItemStyle: { display:'none' }//hide this item from the menu
      }}/>


    <Drawer.Screen name="الأسئلة الشائعة" component={Questions} 
      options={{
        drawerIcon: ({ color, size }) => (
          <FontAwesome name="question-circle" size={24} color="white" />
        ),
        swipeEnabled:true,
      }}/>
        <Drawer.Screen name="إتصل بنا" component={About}   options={{
          drawerIcon: ({ color, size }) => (
          <Entypo name="info" size={24} color="white" />
            ),
            swipeEnabled:true,
        }}/>

      </Drawer.Navigator>
    </NavigationContainer>
    </ThemeContext.Provider>

  );
}



