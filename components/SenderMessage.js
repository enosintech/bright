import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const SenderMessage = ({message}) => {
  return (
    <View style={[tw`bg-teal-800 rounded-full rounded-tr-none px-5 py-3 mx-3 my-2 top-25`, 
    {alignSelf: 'flex-start', marginLeft: 'auto'}
    ]}
    >
      <Text
      style={tw`text-white`}
      >{message.message}</Text>
    </View>
  )
}

export default SenderMessage