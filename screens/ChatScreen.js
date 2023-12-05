import { SafeAreaView, Text, Button } from 'react-native';
import React from 'react';
import Header from '../components/Header'; 
import ChatList from '../components/ChatList';
import SafeViewAndroid from '../components/SafeViewAndroid';

const ChatScreen = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header title='Chat'/>
      <ChatList/>
    </SafeAreaView>
  )
}

export default ChatScreen
