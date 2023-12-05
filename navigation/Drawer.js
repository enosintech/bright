import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { getAuth, signOut } from 'firebase/auth';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { logout } = useAuth();


  return (
    <Drawer.Navigator initial route name='home' screenOptions={{
        drawerActiveTintColor: '#115e59',
        headerShown: false,
        drawerLabelStyle: {
          textDecorationColor: 'white'
        },
        drawerStyle: {
          backgroundColor: 'white'
        }
    }}
    drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem labelStyle={tw`text-white text-right--2`} style={tw`bg-teal-800 rounded-3xl bottom--129`} label="Sign Out" onPress={logout} />
        </DrawerContentScrollView>
      )
    }} 
    >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

export { DrawerNavigator };