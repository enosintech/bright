import { View, SafeAreaView, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import tw from 'twrnc';

const LonelyScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={tw`px-5 mt-10`}>
      <Image source={require('../assets/lonicon.png')} style={tw`h-45 w-45 mt-20 ml-25`}/>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800 p-5 mt-10 ml-20`}>Feeling Lonely?</Text>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>What is loneliness?</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Loneliness is a feeling of isolation or being disconnected from others. It is a normal human experience to feel lonely at times, but chronic loneliness can have negative impacts on our mental and physical health. Loneliness can be triggered by a variety of factors, including a lack of social connections, loss of a loved one, or feeling misunderstood or unsupported by others.</Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Symptoms of loneliness</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Symptoms of loneliness can include:</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Feelings of sadness or emptiness</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Difficulty sleeping or sleeping too much</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Low energy or motivation</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Difficulty concentrating or making decisions</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Decreased interest in activities or hobbies</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Changes in appetite or weight</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Physical symptoms such as headaches or stomachaches</Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Ways to feel better when lonely</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>There are several things you can do to feel better when you are feeling lonely:</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Reach out to friends or family members</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Join a club or group that aligns with your interests</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Volunteer or give back to your community</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Seek out supportive therapy or counseling</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Practice self-care activities such as exercise, meditation, or hobbies</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Set goals and work towards achieving them</Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>- Seek out social activities or events</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default LonelyScreen