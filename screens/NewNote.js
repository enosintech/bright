import { View, SafeAreaView, Text, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet, Button} from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import SafeViewAndroid from '../components/SafeViewAndroid'
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const NewNote = () => {
    const [input, setInput] = useState(null);
    const [title, setTitle] = useState(null);
    const { user } = useAuth();
    const navigation = useNavigation();

    const incompleteNote = !input;

    const AddNote = () => {
        addDoc(collection(db, 'users', user?.uid, 'notes'), {
            displayName: user?.displayName,
            title: title,
            note: input,
            timestamp: serverTimestamp()
        }).then(() => {
            navigation.navigate('Notes')
        })
        .catch((error) => {
            alert(error.message);
        });
    };

  return (
    <SafeAreaView style={[tw`flex-1`, SafeViewAndroid.AndroidSafeArea]}>
      <Header title='Add Note' />
      <View style={tw`flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2 top-0`
        }
        >    
        </View>
        <View>
          <TextInput
          style={tw`text-lg ml-3 mb-5`} 
          placeholder='Add a Title...'
          onChangeText={setTitle}
          value={title}
          />
        </View>
        <ScrollView style={tw`flex-1 `} keyboardDismissMode='interactive'>
                <TextInput
                style={tw`text-lg ml-3`}
                placeholder='Add A Note...'
                onChangeText={setInput}
                value={input}
                />
        </ScrollView>
        <TouchableOpacity  disabled={incompleteNote} onPress={AddNote} style={[tw`rounded-full h-18 w-18 right--75 items-center justify-center`, incompleteNote ? tw`bg-gray-400` : tw`bg-teal-800` ]}>
            <Ionicons name="checkmark-done-sharp" size={35} color="white" />
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default NewNote


