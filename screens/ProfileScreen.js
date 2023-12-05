import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Image, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';


const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={[tw`flex-1`, SafeViewAndroid.AndroidSafeArea]}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={tw`p-2`}>
            <Ionicons name='ios-menu' size={34} color='#115e59'/>
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800`}>Profile</Text>
      </View>
      <View style={tw`flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2`
    }
    >
      <TouchableOpacity style={tw`absolute bg-teal-50 rounded-xl w-91 h-35 top-8 left-3`}
      disabled={true}
      >
        <Image
        style={tw`h-30 w-30 rounded-full right--4 bottom--3`} 
        source={require('../assets/avatr.jpg')} 
        />
        <Text style={[tw`text-right--37 top--20 text-xl pb-2 text-teal-800`, styles.heading]}> 
          {user?.displayName} 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`w-64 p-3 rounded-xl absolute bottom--145 right-15 bg-teal-800`}
      onPress={() => navigation.navigate('Modal1')}
      >
        <Text style={tw`text-center text-white text-xl`}>
            Update Your Profile
        </Text>

      </TouchableOpacity>
      

      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  insideheading:{
    fontFamily: 'HelveticaNeue',
    fontSize: 25,
    fontWeight: '800'
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    fontWeight: 'bold',

  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 17,
    fontWeight: '200',
    marginTop: 10,
  },
  prompt: {
    fontFamily: 'HelveticaNeue',
    fontSize: 15,
    fontWeight: '100',
  }
})