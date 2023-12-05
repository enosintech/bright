import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';

const SplashScreen = () => {
  const navigation = useNavigation();
  const { promptAsync } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style ={tw`flex-1`}>
      <ImageBackground
       resizeMode='cover'
       resizeMethod='resize'
       style={tw`flex-1 justify-center items-center px-2 h-150 `}
       source={require('../assets/bright_splash.png')}
       >
        <TouchableOpacity style={[tw`absolute bottom-50 w-60 bg-white p-1 rounded-2xl`, {marginHorizontal: '25%'}, styles.cardShadow]}
        onPress={() => {
          promptAsync();
        }}>
          <Text style={tw`items-center text-right--11 bottom--3 text-black font-light`}>Sign In With Google</Text>
          <Image 
          style={tw`h-6 w-6 rounded-full bottom-2 right--2`}
          source={require('../assets/google_logo.png')}/>
        </TouchableOpacity>
        <Text style={tw`absolute bottom-7 font-semibold text-black font-thin`}>2022. All Rights Reserved ®</Text>
      </ImageBackground>
    </View>
  )
}

export default SplashScreen;

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