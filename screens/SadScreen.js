import { View, SafeAreaView, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const SadScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={tw`mt-10`}>
      <Image source={require('../assets/sadicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Feeling Sad?</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>What is sadness?</Text>
        <Text style={styles.text}>Sadness is a natural emotional response to difficult or challenging situations. It is a normal and healthy emotion that is a part of the human experience. However, if feelings of sadness persist and interfere with daily life, it may be a sign of a more serious condition such as depression.</Text>

        <Text style={styles.heading}>Symptoms of sadness</Text>
        <Text style={styles.text}>Symptoms of sadness can include:</Text>
        <Text style={styles.listItem}>- Feeling down or hopeless</Text>
        <Text style={styles.listItem}>- Losing interest in activities that used to bring joy</Text>
        <Text style={styles.listItem}>- Changes in appetite and sleep patterns</Text>
        <Text style={styles.listItem}>- Difficulty concentrating</Text>
        <Text style={styles.listItem}>- Lack of energy</Text>
        <Text style={styles.listItem}>- Feeling worthless or guilty</Text>
        <Text style={styles.listItem}>- Thoughts of death or suicide</Text>

        <Text style={styles.heading}>Ways to feel better when sad</Text>
        <Text style={styles.text}>There are several things you can do to feel better when you are feeling sad:</Text>
        <Text style={styles.listItem}>- Engage in activities that bring joy and meaning</Text>
        <Text style={styles.listItem}>- Exercise and get plenty of sleep</Text>
        <Text style={styles.listItem}>- Eat a healthy diet</Text>
        <Text style={styles.listItem}>- Connect with others and build a strong support network</Text>
        <Text style={styles.listItem}>- Practice relaxation techniques such as deep breathing or meditation</Text>
        <Text style={styles.listItem}>- Seek professional help if feelings of sadness persist or interfere with daily life</Text>
        <Text style={styles.text}>It's important to remember that everyone experiences sadness differently, and what works for one person may not work for another. It may take some trial and error to find what works best for you. Don't be afraid to seek help from a mental health professional if your feelings of sadness are severe or persist for an extended period of time.</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SadScreen

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
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 20,
  },
});





