import { View, SafeAreaView, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons}  from '@expo/vector-icons';
import tw from 'twrnc';
import Swiper from 'react-native-deck-swiper';
import { collection, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, setDoc, Timestamp, where } from 'firebase/firestore';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import generateId from '../lib/generateId';
import SafeViewAndroid from '../components/SafeViewAndroid';


const ConnectScreen = () => {

  const { user } = useAuth();
  const navigation = useNavigation();
  const swipeRef = useRef(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let unsub;

    const fetchCards = async () => {
        const passes = await getDocs(collection(db, 'users', user?.uid, 'passes')).then(
          (snapshot) => snapshot.docs.map((doc) => doc.id)
        );

        const swipes = await getDocs(collection(db, 'users', user?.uid, 'swipes')).then(
          (snapshot) => snapshot.docs.map((doc) => doc.id)
        );


      const passedUserIds = passes.length > 0 ? passes : ['test'];
      const swipedUserIds = swipes.length > 0 ? swipes:['test'];

      unsub = onSnapshot(
        query(
          collection(db, 'users'), 
          where('id', 'not-in', [...passedUserIds, ...swipedUserIds])
          ), 
          (snapshot) => {
            setProfiles(
              snapshot.docs
                .filter((doc) => doc.id !== user?.uid)
                .map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
            );
         });
    };

    fetchCards();
    return unsub;
  }, [db]);

  

  const swipeLeft = (cardIndex) => {
      if (!profiles[cardIndex]) return;

      const userSwiped = profiles[cardIndex];
    console.log(`You swiped Pass on ${userSwiped.displayName}`);

    setDoc(doc(db, 'users', user?.uid, 'passes', userSwiped.id),
    userSwiped);
  };


  const swipeRight = async (cardIndex) => {
    if (!profiles[cardIndex]) return;

    const userSwiped = profiles[cardIndex];
    const loggedInProfile = await(
      await getDoc(doc(db, 'users', user?.uid))
    ).data();
    


    getDoc(doc(db, 'users', userSwiped.id, 'swipes', user?.uid)).then(
      (documentSnapshot) => {
        if (documentSnapshot.exists()){
          console.log(`You Matched with ${userSwiped.displayName}`);

          setDoc(
            doc(db, 'users', user?.uid, 'swipes', userSwiped.id),
            userSwiped
            );

          setDoc(doc(db, 'matches', generateId(user?.uid, userSwiped.id)), {
            user: {
              [user?.uid]: loggedInProfile,
              [userSwiped.id]: userSwiped
            }, 
            usersMatched: [user?.uid, userSwiped.id],
            timestamp: serverTimestamp(), 
          });


            navigation.navigate('Match', {
              loggedInProfile, 
              userSwiped,
            });

        } else {
          console.log(`You swiped on ${userSwiped.displayName}`);
          setDoc(
            doc(db, 'users', user?.uid, 'swipes', userSwiped.id),
            userSwiped
            );
        }
      }
    );

  };
  

  return (
    <SafeAreaView style={[tw`flex-1`, SafeViewAndroid.AndroidSafeArea]}>
      {/*header*/}
      <View style={tw`p-2 flex-row items-center justify-between`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity disabled={true} style={tw`p-2`}>
            <MaterialIcons name='contactless' size={34} color='#115e59'/>
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2 text-teal-800`}>Connect</Text>
      </View>
        <TouchableOpacity style={tw`absolute right-5 top-3`} onPress={()=> navigation.navigate("Chat")}>
          <Ionicons name='chatbubbles-sharp' size={35} color="#115e59" />
        </TouchableOpacity>
    </View>
      {/*End of header */}

      {/*Cards*/}
      <View style={tw`flex-1 top--1 -mt-6`}>
        <Swiper 
        ref={swipeRef}
        containerStyle={{ backgroundColor: 'transparent'}}
        cards={profiles}
        stackSize={10}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        backgroundColor={'#5F3F9D'}
        onSwipedLeft={(cardIndex) => {
          console.log('Swipe PASS')
          swipeLeft(cardIndex);
        }}
        onSwipedRight={(cardIndex) => {
          console.log('Swipe Yes')
          swipeRight(cardIndex);
        }}
        overlayLabels={{
          left: {
            title: "NO",
            style: {
              label: {
                textAlign: 'right',
                color: 'red',
              },
            },
          },
          right: {
            title: "YES",
            style: {
              label: {
                textAlign: 'left',
                color: '#115e59',
              },
            },
          }
        }}
        renderCard={(card) => card ? (
          <View 
            key={card.id} 
            style={tw`relative bg-white h-3/4 rounded-xl`}
            >
            <Image 
              style={tw`absolute top-0 h-3/4 w-full`}
              resizeMode='stretch'
              resizeMethod='auto'
              source={require('../assets/avatr.jpg')} 
              />
              

             <View 
              style={[
                tw` absolute bottom-0 bg-white w-full flex-row  justify-between
               h-20 px-6 py-2 rounded-b-xl shadow-xl`
               , 
               styles.cardShadow,
               ]}
               >
              <View>
                  <Text style={tw`text-xl font-bold`}>
                    {card.displayName}
                  </Text>
                  <Text>
                    {card.sign}
                  </Text>
                  <Text>
                    {card.photoURL}
                  </Text>
                </View>
                <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
             </View>
          </View>
        ) : (
          <View
          style={[
            tw`relative bg-white h-3/4 rounded-xl justify-center items-center`
            , 
            styles.cardShadow,
            ]}
          >
            <Text style={tw`font-bold pb-5`}>No More profiles</Text>

            <Image
              style={tw`h-20 w-full`}
              height={100}
              width={100}
              source={require("../assets/emoji.png")}
            /> 
          </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConnectScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});