import { View, SafeAreaView, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import tw from 'twrnc';

const AngryScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={tw`px-5 mt-10`}>
      <Image source={require('../assets/angicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
      <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Feeling Angry?</Text>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>What is anger?</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Anger is a natural and normal emotion that everyone experiences. It is a response to feeling threatened or frustrated. While some level of anger can be healthy and help us stand up for ourselves, uncontrolled or excessive anger can lead to problems in relationships and at work or school.</Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Symptoms of anger</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Symptoms of anger can include:</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Feeling irritable or short-tempered</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Physical symptoms such as increased heart rate, tense muscles, or clenched fists</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Difficulty sleeping</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Difficulty concentrating</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Difficulty making decisions</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Difficulty controlling the anger</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Engaging in reckless or destructive behavior</Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Ways to feel better when angry</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>There are several things you can do to feel better when you are feeling angry:</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Practice deep breathing exercises</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Engage in physical activity or exercise</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Count to ten or take a time-out</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Use "I" statements to express your feelings</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Practice relaxation techniques such as meditation or yoga</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Talk to a trusted friend or family member</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Seek professional help if needed</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default AngryScreen