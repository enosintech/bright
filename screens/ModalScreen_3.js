import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import React, { useState } from 'react';
import Emoji from 'react-native-emoji';
import Slider from '@react-native-community/slider';
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const ModalScreen_3 = ({navigation}) => {
    const { user } = useAuth();
    const [mood, setMood] = useState(3);

    const updateMood = () => {
        addDoc(collection(db, 'users', user?.uid, 'moods'), {
            displayName: user?.displayName,
            mood: mood,
            timestamp: Date.now()
        }).then(() => {navigation.navigate('Landing', {
          paramKey: user?.displayName, paramContent: mood
        });
      })
    };

  return (
    <SafeAreaView>
            <Text style={[tw`mt-10 px-5`,styles.insideheading]}>Please Select Your Mood</Text>
            <Text style={tw`px-5 mt-5 font-thin`}>Slide towards the left if you're feeling low, and towards the right if you're vibing today!</Text>
            <TouchableOpacity style={tw`h-12 w-90 left-3 rounded-2xl bg-teal-800 mt-35`} disabled>
                <Slider
                    minimumValue={1}
                    maximumValue={5}
                    value={mood}
                    onSlidingComplete={setMood}
                    trackImage={require('../assets/colourscale.png')}
                    style={tw`mt-1 h-10 w-89 left-0.5 p-5`}
                />    
            </TouchableOpacity>
            <TouchableOpacity style={tw`items-center justify-center mt-15 h-40 w-40 rounded-2xl right--27 bg-teal-50`} disabled>
              {mood < 2 && <Emoji name="slightly_frowning_face" style={styles.emoji} />}
              {mood >= 2 && mood <= 3 && <Emoji name="neutral_face" style={styles.emoji} />}
              {mood > 3 && mood <= 4 && <Emoji name="smiley" style={styles.emoji} />}
              {mood > 4 && <Emoji name="joy" style={styles.emoji} />}
              <Text style={[tw`font-thin`,styles.moodText]}> Your Mood</Text>
              {mood < 2 && <Text style={tw`font-bold text-2xl text-black`}>Sad</Text>}
              {mood >= 2 && mood <= 3 && <Text style={tw`font-bold text-2xl text-black`}>Neutral</Text> }
              {mood > 3 && mood <= 4 && <Text style={tw`font-bold text-2xl text-black`}>Happy</Text>}
              {mood > 4 && <Text style={tw`font-bold text-2xl text-black`}>Joy</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-teal-800 rounded-full h-20 w-20 mt-10 left-38 items-center justify-center`} onPress={updateMood}>
                <Ionicons name='checkmark' size={30} color='white' />
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ModalScreen_3;


const styles = StyleSheet.create({
    emoji: {
        fontSize: 50,
    },
    moodText: {
        fontSize: 24,
    },
    insideheading:{
    fontFamily: 'HelveticaNeue',
    fontSize: 25,
    fontWeight: '800'
  },
});