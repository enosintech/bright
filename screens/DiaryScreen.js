import { View, SafeAreaView, Text, Button, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import SafeViewAndroid from '../components/SafeViewAndroid';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';

const DiaryScreen = () => {

  const navigation = useNavigation();
  const { user } = useAuth();
  const date = new Date();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      cardStyle: { backgroundColor: '#25544C'}
    });
    }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header title={`${user?.displayName}'s Diary`} />
      <View style={tw`px-7 mb-5`}>
        <Text style={[tw`bottom--5`, styles.subHeading]}>{date.toDateString()}</Text>
        <Text style={[tw`left--1 mt-7`, styles.prompt]}> Schedule your day and gather all your thoughts</Text>
      </View>
      <ScrollView style={tw`flex-col mt-3`}>
        <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2`} onPress={() => navigation.navigate('Todo')}>
        <Image 
          source={(require('../assets/todo.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
          <Text style={[tw`text-white mt-2`, styles.insideheading]} >To Do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-10`} onPress={() => navigation.navigate('Notes')}>
        <Image 
          source={(require('../assets/notes.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
          <Text style={[tw`text-white mt-2`, styles.insideheading]}>Notes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DiaryScreen;


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
    marginTop: 110

  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
    fontWeight: '200',
    marginTop: 10,
  },
  prompt: {
    fontFamily: 'HelveticaNeue',
    fontSize: 15,
    fontWeight: '100',
  }
})