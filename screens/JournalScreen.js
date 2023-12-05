import { View, SafeAreaView, Text, SafeAreaViewBase } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import SafeViewAndroid from '../components/SafeViewAndroid';

const JournalScreen = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Header title='Journals' />
    </SafeAreaView>
  )
}

export default JournalScreen