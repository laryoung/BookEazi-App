import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,
         DrawerContentScrollView,
         DrawerItem 
       } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Entypo,
         Feather,
         AntDesign,
         MaterialIcons,
         MaterialCommunityIcons
       } from '@expo/vector-icons';
import {
        HomeScreen,
        BookingScreen,
        InviteScreen,
        SavedScreen,
        HelpScreen,
        DrawerContentScreen
      } from './src/screens';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs(){
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor:'#e91e63',
        labelStyle: {
          paddingTop:-2,
          marginBottom:2
        },
        style:{
          position:'absolute'
        },
        keyboardHidesTabBar: true   
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color,size}) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Bookings" 
        component={BookingScreen}
        options={{
          tabBarIcon: ({color,size}) => (
            <Feather name="shopping-bag" size={size} color={color}/>
          )
        }} 
      />
      <Tab.Screen 
        name="Invite & Earn" 
        component={InviteScreen}
        options={{
          tabBarIcon:({ color, size }) => (
            <AntDesign name="adduser" size={size} color={color} />
          )
        }}  
      />
      <Tab.Screen 
        name="Saved" 
        component={SavedScreen} 
        options={{
          tabBarIcon:({ color,size }) => (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Need Help" 
        component={HelpScreen}
        options={{
          tabBarIcon:({ color,size }) => (
            <MaterialCommunityIcons name="help-circle-outline" size={size} color={color}/>
          )
        }}  
      />
    </Tab.Navigator>
  )
}

function DrawerMenu(){
  return(
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor:"#e91e63"
    }}
    drawerContent={(props)=><DrawerContentScreen {...props} />}
  >
    <Drawer.Screen name="Tabs" component={Tabs} />
  </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
           <DrawerMenu />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
