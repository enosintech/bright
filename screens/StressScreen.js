import { View, SafeAreaView, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const StressScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={tw`mt-10`}>
      <Image source={require('../assets/streicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Feeling Stressed?</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>What is stress?</Text>
        <Text style={styles.text}>Stress is the body's natural response to demands or challenges. It can be caused by a variety of factors, including work, relationships, financial problems, and health issues. While some stress can be beneficial and help us perform at our best, chronic stress can have negative effects on our physical and mental health.</Text>

        <Text style={styles.heading}>Symptoms of stress</Text>
        <Text style={styles.text}>Symptoms of stress can include:</Text>
        <Text style={styles.listItem}>- Headaches</Text>
        <Text style={styles.listItem}>- Difficulty sleeping</Text>
        <Text style={styles.listItem}>- Lack of energy</Text>
        <Text style={styles.listItem}>- Difficulty concentrating</Text>
        <Text style={styles.listItem}>- Low mood or irritability</Text>
        <Text style={styles.listItem}>- Changes in appetite</Text>
        <Text style={styles.listItem}>- Increased use of alcohol or drugs</Text>
        <Text style={styles.listItem}>- Aches and pains</Text>

        <Text style={styles.heading}>Ways to feel better when stressed</Text>
        <Text style={styles.text}>There are several things you can do to feel better when you are feeling stressed:</Text>
        <Text style={styles.listItem}>- Practice deep breathing exercises</Text>
        <Text style={styles.listItem}>- Engage in physical activity or exercise</Text>
        <Text style={styles.listItem}>- Get plenty of sleep</Text>
        <Text style={styles.listItem}>- Eat a healthy diet</Text>
        <Text style={styles.listItem}>- Avoid caffeine, alcohol, and other stimulants</Text>
        <Text style={styles.listItem}>- Practice relaxation techniques such as meditation or yoga</Text>
        <Text style={styles.listItem}>- Talk to a trusted friend or family member</Text>
        <Text style={styles.listItem}>- Seek professional help if stress is disrupting your daily life</Text>
        <Text style={styles.text}>It's important to remember that everyone experiences stress differently, and what works for one person may not work for another. It may take some trial and error to find what works best for you. Don't be afraid to seek help from a mental health professional if your stress is severe or disrupting your daily life.</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default StressScreen


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




