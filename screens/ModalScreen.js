import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const ModalScreen = () => {
    const { user } = useAuth();
    const [image, setImage] = useState(null);
    const [sign, setSign] = useState(null);
    const [age, setAge] = useState(null);
    const navigation = useNavigation();

    const incompleteForm = !image || !sign || !age;


    const updateUserProfile = () => {
        setDoc(doc(db, 'users', user?.uid), {
            id: user?.uid,
            displayName: user?.displayName,
            photoURL: image,
            sign: sign,
            age: age,
            timestamp: serverTimestamp()
        }).then(() => {
            navigation.navigate("Landing");
        })
        .catch((error) => {
            alert(error.message);
        });

    }
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={tw`flex-1 items-center pt-1`}>
          <Image
          style={tw`h-80 right--1 w-100 bottom--10`}
          resizeMode='contain'
          source={require('../assets/Bright.png')} 
          />
        <Text style={tw`text-xl text-gray-500 p-2 top--10`}>
          Welcome to Bright, {user?.displayName}
        </Text>

        <Text style={tw`text-center p-4 font-bold text-teal-800 top--10`}>
          Step 1: Prime Mental Issue
        </Text>

        <TextInput style={tw`text-center text-xl pb-2 top--10`}
                  placeholder='Enter your main mental challenge'
                  value={image}
                  editable={true}
                  onChangeText={setImage} />
        

        <Text style={tw`text-center p-4 font-bold text-teal-800 top--10`}>
              Step 2: The Star Sign
        </Text>
        <TextInput style={tw`text-center text-xl pb-2 top--10`}
                  value={sign}
                  placeholder='Enter your Star Sign'
                  onChangeText={text => setSign(text)}/>

        <Text style={tw`text-center p-4 font-bold text-teal-800 top--10`}>
              Step 3: The Age
        </Text>
        <TextInput style={tw`text-center text-xl pb-2 top--10`}
                  placeholder='Enter your Age'
                  onChangeText={text => setAge(text)}
                  value={age}
                  maxLength={2}
                  keyboardType='numeric'/>
        <TouchableOpacity style={[tw`w-64  p-3 rounded-xl absolute bottom-25`, incompleteForm ? tw`bg-gray-400` : tw`bg-teal-800`,]}
                          disabled={incompleteForm}
                          onPress={updateUserProfile}
                          >
          <Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ModalScreen;