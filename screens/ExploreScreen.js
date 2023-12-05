import { View, SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';

const ExploreScreen = () => {
  const { user } = useAuth();
  const date = new Date();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header title={'Explore'}/>
      <View style={tw`px-7 mb-5`}>
       <Text style={[tw`bottom--5`, styles.subHeading]}>{date.toDateString()}</Text>
       <Text style={[tw`left--1 mt-7 left--2 `, styles.heading]}> Today I feel: </Text>
      </View>
      <ScrollView>
        <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2`} onPress={() => {navigation.navigate('Anxious')}}>
        <Image 
          source={(require('../assets/anxiety.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
            <Text style={[tw`text-white mt-2`, styles.insideheading]} >Anxious</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-10`} onPress={() => {navigation.navigate('Stress')}}>
          <Image 
          source={(require('../assets/stress.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
            <Text style={[tw`text-white mt-2`, styles.insideheading]}>Stressed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-10`} onPress={() => {navigation.navigate('Sad')}}>
          <Image 
          source={(require('../assets/sad.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
            <Text style={[tw`text-white mt-2`, styles.insideheading]}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-10`} onPress={() => {navigation.navigate('Angry')}}>
          <Image 
          source={(require('../assets/angry.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
            <Text style={[tw`text-white mt-2`, styles.insideheading]}>Angry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-10`} onPress={() => {navigation.navigate('Lonely')}}>
          <Image 
          source={(require('../assets/lonely.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
            <Text style={[tw`text-white mt-2`, styles.insideheading]}>Lonely</Text>
          </TouchableOpacity>
          <Text style={[tw`left--1 mt-7 px-5 `, styles.heading]}> Also Check Out Our:  </Text>
          <TouchableOpacity style={tw`bg-red-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-5`} onPress={() => {navigation.navigate('Resources')}}>
            <Text style={[tw`text-white mt-2`, styles.insideheading]}>Resources</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  insideheading:{
    fontFamily: 'HelveticaNeue',
    fontSize: 25,
    fontWeight: '800'
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 25,
    fontWeight: 'bold',
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