import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const MeditationScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={tw`mt-10`}>
      <Image source={require('../assets/medicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Meditation</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>What is meditation?</Text>
        <Text style={styles.subheading}>Meditation is a practice in which an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</Text>

        <Text style={styles.heading}>Benefits of meditation</Text>
        <Text style={styles.text}>Meditation has been shown to have numerous benefits for physical and mental health. Some of the benefits of meditation include:</Text>
        <Text style={styles.listItem}>- Reducing stress and anxiety</Text>
        <Text style={styles.listItem}>- Improving sleep</Text>
        <Text style={styles.listItem}>- Reducing blood pressure</Text>
        <Text style={styles.listItem}>- Improving focus and concentration</Text>
        <Text style={styles.listItem}>- Increasing self-awareness</Text>
        <Text style={styles.listItem}>- Reducing negative emotions</Text>
        <Text style={styles.listItem}>- Promoting feelings of calm and relaxation</Text>

        <Text style={styles.heading}>Types of meditation</Text>
        <Text style={styles.listItem}>- Movement meditation: Focusing on the breath and body movements during activities such as walking or yoga</Text>

        <Text style={styles.heading}>How to start a meditation practice</Text>
        <Text style={styles.text}>Starting a meditation practice can be as simple as setting aside a few minutes each day to sit in quiet contemplation or focusing on the breath. Here are a few tips for starting a meditation practice:</Text>
        <Text style={styles.listItem}>- Choose a quiet and comfortable space to meditate</Text>
        <Text style={styles.listItem}>- Start with short meditation sessions and gradually increase the length of time as you become more comfortable</Text>
        <Text style={styles.listItem}>- Try different types of meditation to find what works best for you</Text>
        <Text style={styles.listItem}>- Be patient and don't worry if your mind wanders – this is normal and part of the practice</Text>
        <Text style={styles.listItem}>- Consider finding a meditation group or class to join for support and guidance</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default MeditationScreen


const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
    },
    listItem: {
      fontSize: 16,
      marginLeft: 20,
    },
    subheading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
  });
  