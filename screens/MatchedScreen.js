import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc';

const MatchedScreen = () => {
    const navigation = useNavigation();
    const { params }= useRoute();

    const { loggedInProfile , userSwiped } = params;

  return (
    <View style={[tw`h-full bg-teal-700 pt-20`, {opacity: 0.89 }]}>
        <View style={tw`justify-center items-center px-10 pt-20`}>
            <Text style={tw`font-bold text-5xl`}>Relief</Text>
        </View>

        <Text style={tw`text-white text-center mt-5`}>
            You and {userSwiped.displayName} are now connected.
        </Text>

        <View style={tw`flex-row justify-evenly mt-5`}>
            <Image 
            style={tw`h-32 w-32 rounded-full`}
            source={require('../assets/avatr.jpg')}
            />
            <Image 
            style={tw`h-32 w-32 rounded-full`}
            source={require('../assets/avatr.jpg')}
            />
        </View>

        <TouchableOpacity style={tw`bg-white m-5 px-10 py-8 rounded-full mt-20`}
        onPress={() => {
            navigation.goBack();
            navigation.navigate('Chat');
        }}>
            <Text style={tw`text-center`}>Reach Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MatchedScreen