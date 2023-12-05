import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ReceiverMessage = ({message}) => {
  return (
    <View style={[tw`bg-teal-100 rounded-full rounded-tr-none px-5 py-3 mx-3 my-2 ml-14 top-25`, 
    {alignSelf: 'flex-start'}
    ]}
    >
      <Image
      style={tw`h-12 w-12 rounded-full absolute top-0 -left-14`}
      source={require('../assets/avatr.jpg')} 
    />
      <Text style={tw`text-black`}>{message.message}</Text>
    </View>
  )
}

export default ReceiverMessage