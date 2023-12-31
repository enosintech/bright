import { View, SafeAreaView, Text, TextInput, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'
import useAuth from '../hooks/useAuth'
import { useRoute } from '@react-navigation/native'
import tw from 'twrnc';
import ReceiverMessage from '../components/ReceiverMessage'
import SenderMessage from '../components/SenderMessage'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import SafeViewAndroid from '../components/SafeViewAndroid'


const MessagesScreen = (props) => {
    const { user } = useAuth();
    const { params } = useRoute();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const { matchDetails } = params;


    useEffect(() => onSnapshot(
            query(
                collection(db, 'matches', matchDetails.id, 'messages'), 
                orderBy('timestamp', 'desc')
             ), 
             (snapshot) => 
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
        ), [matchDetails, db])

    const sendMessage = () => {
        addDoc(collection(db, 'matches', matchDetails.id, 'messages'), {
            timestamp: serverTimestamp(),
            userId: user?.uid,
            displayName: user?.displayName,
            photoURL: matchDetails.user[user?.uid].photoURL,
            message: input,
        });

        setInput('');
    };

  return (
    <SafeAreaView style={[tw`flex-1`, SafeViewAndroid.AndroidSafeArea]}>
        <Header title={getMatchedUserInfo(matchDetails.user, user?.uid).displayName} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FlatList
            data={messages}
            inverted={-1}
            style={tw`pl-4`}
            keyExtractor={item => item.id}
            renderItem={({ item: message }) => 
                message.userId === user?.uid ? (
                    <SenderMessage key={message.id} message={message} />
                ) : (
                    <ReceiverMessage key={message.id} message={message} />
                )
            } 
            />
        </TouchableWithoutFeedback>
    
      <View style={tw`flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2 top--20`
        }
    >
        <TextInput
        style={tw`h-16 w-70 text-lg`}
        placeholder='Send Message...'
        onChangeText={setInput}
        onSubmitEditing={sendMessage}
        value={input}
        />
        <Button  title='Send' color='#115e59' onPress={sendMessage} />
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default MessagesScreen