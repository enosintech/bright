import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';


const ResourcesScreen = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <Header title={'Resources'}/>
      <Text style={[tw`px-5 mt--1 top--25`, styles.heading]}> Learn About: </Text>
      <ScrollView style={tw`mt--20`}>
        <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2`} onPress={() => {navigation.navigate('Mindfulness')}}>
        <Image 
          source={(require('../assets/mindfulness.jpg'))} 
          style={tw`absolute h-full w-85 rounded-2xl`}
          />
            <Text style={[tw`text-white mt-2`, styles.insideheading]} >Mindfulness</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 px-2 mt-10`} onPress={() => {navigation.navigate('Meditation')}}>
          <Image 
            source={(require('../assets/meditation.jpg'))} 
            style={tw`absolute h-full w-85 rounded-2xl`}
            />
            <Text style={[tw`text-white mt-2`, styles.insideheading]}>Meditation</Text>
          </TouchableOpacity>
      </ScrollView>
      <View style={tw`flex-row justify-center items-center`}>
        <Text style={[tw`mr-5 bottom--2`, styles.subHeading]}>National Suicide Prevention Helpline:</Text>
        <TouchableOpacity style={tw`bg-teal-800 rounded-full h-17 w-17 items-center justify-center mt-5`} onPress={() => Linking.openURL('tel: 03-76272929')}>
          <Ionicons name='call' size={35} color='white'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ResourcesScreen

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