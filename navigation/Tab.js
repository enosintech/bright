import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

import { DrawerNavigator } from './Drawer';
import { ChatNavigator } from './ChatNavigator';
import { StyleSheet } from 'react-native';

const homeName = 'Home';
const ConnectName = 'Connect';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={homeName}
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            
            if(rn === homeName){
                iconName = focused ? 'home-filled' : 'home-filled'
            } else if (rn === ConnectName){
                iconName = focused? 'contactless' : 'contactless'
            }
            
            return <MaterialIcons name={iconName} size={size} color={color} style={tw`flex-row bottom--1`}/>
        },
        headerShown: false,
        cardStyle: { backgroundColor: '#25544C' },
        tabBarActiveTintColor: "#115e59",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: -4
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 2,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height:1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

        }  
      })}
      
      >
            <Tab.Screen name='Home' component={DrawerNavigator} />
            <Tab.Screen name='Connect' component={ChatNavigator} />
        </Tab.Navigator>
  )
}

export { TabNavigator };


const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
