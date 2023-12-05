import { View, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/native';



const ViewNotes = ({route}) => {
  const { user } = useAuth();
  const navigation = useNavigation()
  const docRef = doc(db, 'users', user?.uid, 'notes', route.params.paramid)
  
  const deletedocument = () => {
    deleteDoc(docRef)
    .then(() => {navigation.navigate('Notes')})
    .catch(error => {console.log(error)})
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header title={route.params.paramKey || 'No Title'} />
      <View style={tw`flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2`
    }
    ></View>
    <ScrollView style={tw`flex-1`}>
      <Text style={tw`ml-5 mt-5 font-semibold`}>{route.params.paramContent}</Text>
    </ScrollView>

    </SafeAreaView>
  )
}

export default ViewNotes