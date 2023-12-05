import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const header = ({title, callEnabled, chat, add }) => {
    const navigation = useNavigation();

  return (
    <View style={tw`p-2 flex-row items-center justify-between`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
            <Ionicons name='chevron-back-outline' size={34} color='#115e59'/>
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800`}>{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity style={tw`rounded-full mr-4 p-3 bg-teal-50`}>
            <Foundation style={tw``} name='telephone' size={20} color='#115e59' />
        </TouchableOpacity>
      )}
      {chat && (
        <TouchableOpacity style={tw`absolute right-5 top-3`} onPress={()=> navigation.navigate("Chat")}>
          <Ionicons name='chatbubbles-sharp' size={35} color="#115e59" />
        </TouchableOpacity>
      )}
      {add && (
        <TouchableOpacity style={tw`absolute right-5 top-3`} onPress={() => navigation.navigate('AddNote')}>
          <Ionicons name='add' size={35} color="#115e59" />
        </TouchableOpacity>
      )}


    </View>
  )
}

export default header