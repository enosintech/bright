import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';

const ModalScreen_2 = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={tw`flex-1 items-center pt-1`}>
      <Image
          style={tw`h-70 right--1 w-500 bottom--10`}
          resizeMode='contain'
          source={require('../assets/Bright.png')} 
          />
        <Text style={tw`text-xl text-gray-500 p-2`}>
          Welcome to Bright, {user?.displayName}
        </Text>

        <Text style={tw`text-center p-4 font-bold text-teal-800`}>
          About: 
        </Text>

        <Text style={tw`text-center p-4 text-gray-500`}>
          Bright is a Wellness Application focused on Human Moods. Have you ever
          been in a situation where you felt you really needed somebody and nobody
          was there to talk to you? Well, Bright aims to solve that problem. It does
          so by creating an environment for people who are in need emotionally and mentally
          to have their needs met by other people on the application. If you are feeling low,
          you could simply hop onto the app and potentially talk to somebody about it.
        </Text>

        <TouchableOpacity style={tw`w-64  p-3 rounded-xl absolute bottom-20 bg-teal-800`}
                          onPress={() => navigation.goBack()
                          }
                          >
          <Text style={tw`text-center text-white text-xl`}>Close</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default ModalScreen_2