import * as React from 'react';
import { Button, View,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RGB from './screens/RGB';
import Conditioner from './screens/Conditioner';
import TV from './screens/TV';
import Colors from './components/Colors';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.dark,
        },
        headerStyle: {
          backgroundColor: "#aaa"
        },
        headerShown: true,
        drawerActiveTintColor:"#fff",
        drawerInactiveTintColor:"#aaa",
      }} >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="TV" component={TV} />
        <Drawer.Screen name="RGB" component={RGB} />
        <Drawer.Screen name="Conditioner" component={Conditioner} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*


{
  "cli": {
    "version": ">= 2.6.0"
  },
  "build": {
    "development": {
      "distribution": "internal",
      "android": {
        "gradleCommand": ":app:assembleDebug"
      },
      "ios": {
        "buildConfiguration": "Debug"
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
*/