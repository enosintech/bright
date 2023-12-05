import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, FlatList, TouchableWithoutFeedback, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Header from '../components/Header';
import tw from 'twrnc';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { onValue, ref as sRef } from 'firebase/database';
import { db } from '../firebase';

const TodoScreen = () => {
    const { user } = useAuth();
    const [task, setTask] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [todos, setTodos] = useState([]);

    const dbRef = collection(db, 'users', user?.uid, 'tasks');
    const date = new Date()



    
    useEffect(() => {
        onSnapshot(dbRef, docsSnap => {
            setJobs(docsSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })))
        })
    }, [])

    useEffect(() => {
        onSnapshot(
            query(
                collection(db, 'users', user?.uid, 'tasks'),
            ),
            (snapshot) => {
                if (snapshot.empty) {
                    setTodos(2)
                    return;
                } else {
                    setTodos(1)
                }
            }
        )

    })
 

    const updateTodoList = () => {
        addDoc(collection(db, 'users', user?.uid, 'tasks'), {
            displayName: user?.displayName,
            task: task,
            timestamp: serverTimestamp()
        });
    };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={styles.container}>
        <View style={styles.tasksWrapper}>
            <View style={tw`mt--5 ml--5`}>
                <Header title={`To-Do List`}/>
            </View>
                <Text style={[styles.subHeading, tw`mt-5 px-3 text-gray-500`]}>{date.toDateString()}</Text>
                <Text style={ tw`mt-5 px-3 text-gray-500 font-thin`}>What are you doing today?</Text>
            <View style={styles.items}>
                {/*Tasks*/}
                <FlatList 
                style={tw`h-full`}
                data={jobs}
                keyExtractor={item => item.id}
                renderItem={({item}) => item  ? (
                    <TouchableOpacity style={styles.item} onPress={()=>{deleteDoc(doc(db, 'users', user?.uid, 'tasks', item.id))}}>
                        <View style={styles.itemLeft}>
                            <View style={styles.square}>
                                <Entypo name="dot-single" size={24} color="white" />
                            </View>
                            <Text style={styles.itemText}>{item.task}</Text>
                            </View>
                        <View style={styles.circular}></View>
                    </TouchableOpacity>
                    ) : (
                    <View style={tw`p5`}>
                        <Text style={tw`text-center text-lg text-black `}>You have no tasks today</Text>
                    </View>
                    )}
                />
                
            </View>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={ styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder='Write a Task' onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={updateTodoList}>
                    <View style={styles.addWrapper}>
                        <Entypo name="add-to-list" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </View>
    </SafeAreaView>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    tasksWrapper: {
         paddingTop: 20,
         paddingHorizontal: 15,
         borderColor: '#115e59'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#115e59',
        borderWidth: 1,
        width: 250,

    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#115e59',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#115e59',
        borderWidth: 1,
        

    },
    addText: {},
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
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 20,
        fontWeight: '200',
        marginTop: 10,
      },
});



