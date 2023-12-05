import { View, SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';



const NotesScreen = ({navigation}) => {
    const { user } = useAuth();
    const dbRef = collection(db, 'users', user?.uid, 'notes');
    const [notes, setNotes] = useState(null);
    


    useEffect(() => {
        onSnapshot(dbRef, docsSnap => {
            setNotes(docsSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })))
        })
    }, [])




  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header title={`Notes`} add />
      <View style={tw`pt-20 px-5 py-10`}>
        <FlatList 
        style={tw`h-full`}
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => item  ? (
            <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('ViewNote', {paramid: item.id, paramKey: item.title, paramContent: item.note} )}} onLongPress={() => {deleteDoc(doc(db, 'users', user?.uid, 'notes', item.id))}} >
                <View style={styles.itemLeft}>
                    <View style={styles.square}>
                        <Entypo name="dot-single" size={24} color="white" />
                    </View>
                    <Text style={styles.itemText} numberOfLines={1}>{item.title || item.note}</Text>
                    </View>
                <View style={styles.circular}></View>
            </TouchableOpacity>
            ) : (
            <View style={tw`p-5`}>
                <Text style={tw`text-center text-lg text-black`}>You have no tasks today</Text>
            </View>
            ) }
        />
      </View>

    </SafeAreaView>
  )
}


export default NotesScreen



const styles = StyleSheet.create({
    item: {
        backgroundColor: '#115e59',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,    
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    }, 
    square: {
        width: 24,
        height: 24, 
        marginRight: 5,
    },
    itemText: {
        maxWidth: '80%',
        color: 'white'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 5,
    }

})