import { View, SafeAreaView, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const MindfulnessScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView style={tw`mt-10`}>
        <Image source={require('../assets/mindicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Mindfulness</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>What is mindfulness?</Text>
        <Text style={styles.subheading}>Mindfulness is a mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations, used as a therapeutic technique.</Text>

        <Text style={styles.heading}>Benefits of mindfulness</Text>
        <Text style={styles.text}>In recent years, mindfulness has gained popularity as a tool for stress reduction and overall well-being. It has been shown to have a positive impact on physical and mental health, including reducing anxiety and depression, improving sleep, and increasing focus and productivity.</Text>

        <Text style={styles.heading}>How to practice mindfulness</Text>
        <Text style={styles.text}>Practicing mindfulness involves paying attention to one's breath, physical sensations, and surroundings in a non-judgmental way. It can be practiced through activities such as meditation, yoga, and mindful breathing.</Text>

        <Text style={styles.subheading}>Ways to incorporate mindfulness into daily life</Text>
        <Text style={styles.text}>There are many ways to incorporate mindfulness into daily life, such as:</Text>
        <Text style={styles.listItem}>- Taking a few minutes each day to sit in quiet meditation</Text>
        <Text style={styles.listItem}>- Paying attention to your breath during moments of stress</Text>
        <Text style={styles.listItem}>- Focusing on the present moment while eating, rather than multitasking</Text>
        <Text style={styles.listItem}>- Taking a walk and paying attention to your surroundings</Text>

        <Text style={styles.text}>Mindfulness can be a helpful tool in managing stress and finding greater peace and well-being. It's important to remember that it takes practice and patience to develop a mindfulness practice, but the benefits are well worth the effort.</Text>
        <Text style={styles.text}>Incorporating mindfulness into your daily routine can be as simple as setting aside a few minutes each day to sit in quiet meditation, or taking a few mindful breaths before starting a task. With practice, mindfulness can become a natural part of your daily routine, leading to greater peace and well-being.</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default MindfulnessScreen


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
    subheading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
      marginTop: 10,
    },
    listItem: {
      fontSize: 16,
      marginLeft: 20,
    },
  });