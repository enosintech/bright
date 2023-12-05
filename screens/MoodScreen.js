import { View, SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { VictoryLine } from 'victory-native';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import tw from 'twrnc'




const MoodScreen = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const dbRef = collection(db, 'users', user?.uid, 'moods')


  useEffect(() => {
    onSnapshot(dbRef, docsSnap => {
      setData(docsSnap.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
      })))
    })
  }, [])

 const myobj = data.pop()
  
  return (
    <SafeAreaView style={tw`flex-auto`}>
     
    </SafeAreaView>
  )
}

export default MoodScreen