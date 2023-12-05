import { Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import React, { useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAuth} from 'firebase/auth';
import { collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import SafeViewAndroid from '../components/SafeViewAndroid';
import { Pedometer } from 'expo-sensors';
import Emoji from 'react-native-emoji';
import { WebView } from 'react-native-webview';


const HomeScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const date = new Date();
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, SetPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  if (user !== null){
    const dbRef = collection(db, 'users', user?.uid, 'moods')
  }
  const [mood, setMood] = useState([3])


  useEffect(() => {
    onSnapshot(
      query(
        collection(db, 'users', user?.uid, 'moods'),
        where("displayName", "==", user?.displayName),
        orderBy('timestamp', 'desc'),
        limit(1)
      ), 
      (snapshot) => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
      }

      snapshot.forEach(doc => {
        setMood(doc.data().mood);
      });
    })
  }, [])



  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));


  
    if(isAvailable){
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);
  
      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if(pastStepCountResult){
        SetPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result=>{
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return() => subscription && subscription.remove;
  }, []);


  useLayoutEffect(() => 
  onSnapshot(doc(db, 'users', user?.uid), (snapshot) => {
    if (!snapshot.exists()){
      navigation.navigate('Modal1');
    }
  }),
  []
  );

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      {/*header*/}
    <View style={tw`items-center relative px-3`}>
      <TouchableOpacity style={tw`absolute top-4 left-3`}
      onPress={() => navigation.openDrawer()}>
          
          <Image 
          style={tw`h-10 w-10 rounded-full`} 
          source={require('../assets/avatr.jpg')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={tw`absolute top--15`} onPress={() => navigation.navigate('Modal2')}>
        <Image style={tw`h-50 w-20`} source={require("../assets/bright_logo.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={tw`absolute top-5 right-4`} onPress={() => navigation.navigate('Diary')}>
        <Ionicons name='journal' size={30} color="#115e59" />
      </TouchableOpacity>
    </View>
      {/*end of header*/}
    <Text style={[styles.subHeading, tw` bottom--27 px-5 text-gray-500`]}>{date.toDateString()}</Text>
    <Text style={[styles.heading, tw`px-3`]}> Hi, {`${user?.displayName}`}</Text>
    <TouchableOpacity style={tw`flex-row bg-gray-700 rounded-full bottom--4 py-5 ml-5 mr-5`} onPress={() => {navigation.navigate('Modal3')}}>
      <Text style={tw`px-5 text-white font-thin bottom--2`}>What is your Mood?</Text>
      <MaterialIcons style={tw`h-8 right--34 top--0`} name='keyboard-arrow-right' size={35} color='white'/>
    </TouchableOpacity>

    <ScrollView 
    style={tw`mt-8 mb-21`}
    >
      <TouchableOpacity style={tw`justify-center items-center bg-teal-50 h-43 w-43 rounded-2xl ml-5`} disabled>
          {mood < 2 && <Emoji name="slightly_frowning_face" style={styles.emoji} />}
          {mood >= 2 && mood <= 3 && <Emoji name="neutral_face" style={styles.emoji} />}
          {mood > 3 && mood <= 4 && <Emoji name="smiley" style={styles.emoji} />}
          {mood > 4 && <Emoji name="joy" style={styles.emoji} />}
        <Text style={tw`font-thin text-black`}>Today's Mood</Text>
          {mood < 2 && <Text style={tw`font-bold text-2xl text-black`}>Sad</Text>}
          {mood >= 2 && mood <= 3 && <Text style={tw`font-bold text-2xl text-black`}>Neutral</Text> }
          {mood > 3 && mood <= 4 && <Text style={tw`font-bold text-2xl text-black`}>Happy</Text>}
          {mood > 4 && <Text style={tw`font-bold text-2xl text-black`}>Joy</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={tw` justify-center  items-center bg-gray-300 h-43 w-43 rounded-2xl right--50 mr-5 top--43`} disabled>
        <FontAwesome5 name='walking' size={60} color='white' />
        <Text style={tw`font-thin mt-2`}>Today's Steps</Text>
        <Text style={tw`font-bold text-2xl text-black`}>{currentStepCount}</Text>
      </TouchableOpacity>
      <View style={tw`items-center mt--40`}>
        <TouchableOpacity style={tw`bg-teal-800 rounded-2xl ml-5 h-60 w-85 left--2`} onPress={()=>{navigation.navigate('Explore')}}>
          <Image 
          source={(require('../assets/wellness.jpg'))} 
          style={tw`absolute h-full w-full rounded-2xl`}
          />
            <Text style={[tw`text-white ml-2 mt-2`,styles.insideheading]}>Explore Wellness!</Text>
        </TouchableOpacity>
        <Text style={styles.webHeading}>Check Out these Deep Relaxation Sounds: </Text>
        <TouchableOpacity style={tw` px-5 ml-5 h-40 w-full left--2 mt-5`}>
            <WebView source={{html: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'}} />
        </TouchableOpacity>
      </View>
    </ScrollView>

    
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainColor: {
    backgroundColor: '#5F3F9D'
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
  },
  header: {
    
  },
  insideheading:{
    fontFamily: 'HelveticaNeue',
    fontSize: 25,
    fontWeight: '800'
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 110

  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
    fontWeight: '200',
    marginTop: 10,
  },
  webHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 15,
    fontWeight: '300',
    marginTop: 10,
  },
  sectionWrapper1: {
    flexDirection: 'row',
  },
  item1: {
    backgroundColor: '#115e59',
  },
  item2: {
    backgroundColor: '#99f6e4'
  },
  emoji: {
    fontSize: 50,
  },
  moodText: {
    fontSize: 24,
},

});