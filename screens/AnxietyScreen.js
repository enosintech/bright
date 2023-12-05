import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import tw from 'twrnc'

const AnxietyScreen = () => {
  return (
    <View>

    <ScrollView style={tw`mt-10`}>
        <Image source={require('../assets/anxicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Feeling Anxious?</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>What is anxiety?</Text>
        <Text style={styles.text}>Anxiety is a normal and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it can become a medical disorder. Anxiety disorders form a category of mental health diagnoses lead to excessive nervousness, fear, apprehension, and worry.</Text>

        <Text style={styles.heading}>Symptoms of anxiety</Text>
        <Text style={styles.text}>Symptoms of anxiety can include:</Text>
        <Text style={styles.listItem}>- Restlessness or feeling wound-up or on edge</Text>
        <Text style={styles.listItem}>- Easily fatigued</Text>
        <Text style={styles.listItem}>- Difficulty concentrating or mind going blank</Text>
        <Text style={styles.listItem}>- Irritability</Text>
        <Text style={styles.listItem}>- Muscle tension</Text>
        <Text style={styles.listItem}>- Difficulty sleeping</Text>
        <Text style={styles.listItem}>- Difficulty controlling the worry</Text>
        <Text style={styles.listItem}>- Panic attacks</Text>
        <Text style={styles.listItem}>- Frequent trips to the bathroom</Text>

        <Text style={styles.heading}>Ways to feel better when anxious</Text>
        <Text style={styles.text}>There are several things you can do to feel better when you are feeling anxious:</Text>
        <Text style={styles.listItem}>- Practice deep breathing exercises</Text>
        <Text style={styles.listItem}>- Engage in physical activity or exercise</Text>
        <Text style={styles.listItem}>- Get plenty of sleep</Text>
        <Text style={styles.listItem}>- Eat a healthy diet</Text>
        <Text style={styles.listItem}>- Avoid caffeine, alcohol, and other stimulants</Text>
        <Text style={styles.listItem}>- Practice relaxation techniques such as meditation or yoga</Text>
        <Text style={styles.listItem}>- Talk to a trusted friend or family member</Text>
        <Text style={styles.listItem}>- Seek professional help if anxiety is disrupting your daily life</Text>

        <Text style={styles.text}>It's important to remember that everyone experiences anxiety differently, and what works for one person may not work for another. It may take some trial and error to find what works best for you. Don't be afraid to seek help from a mental health professional if your anxiety is severe or disrupting your daily life.</Text>
      </View>
    </ScrollView>
    </View>
  )
}

export default AnxietyScreen

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
    marginTop: 15,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 20,
  },
});