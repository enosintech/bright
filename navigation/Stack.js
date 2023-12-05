import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabNavigator } from './Tab';
import { LoginNavigator } from './LoginNavigator';
import useAuth from '../hooks/useAuth';
import ModalScreen from '../screens/ModalScreen';
import ModalScreen_2 from '../screens/ModalScreen_2';
import DiaryScreen from '../screens/DiaryScreen';
import TodoScreen from '../screens/TodoScreen';
import NotesScreen from '../screens/NotesScreen';
import NewNote from '../screens/NewNote';
import ViewNotes from '../screens/ViewNotes'
import ModalScreen_3 from '../screens/ModalScreen_3';
import ModalScreen_4 from '../screens/ModalScreen_4';
import MoodScreen from '../screens/MoodScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import AngryScreen from '../screens/AngryScreen';
import AnxietyScreen from '../screens/AnxietyScreen';
import StressScreen from '../screens/StressScreen';
import SadScreen from '../screens/SadScreen';
import LonelyScreen from '../screens/LonelyScreen';
import MeditationScreen from '../screens/MeditationScreen';
import MindfulnessScreen from '../screens/MindfulnessScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {user ? (
          <>
            <Stack.Group>
              <Stack.Screen name='Landing' component={TabNavigator} />
              <Stack.Screen name='Diary' component={DiaryScreen} />
              <Stack.Screen name='Todo' component={TodoScreen} />
              <Stack.Screen name='Notes' component={NotesScreen} />
              <Stack.Screen name='AddNote' component={NewNote} />
              <Stack.Screen name='ViewNote' component={ViewNotes} />
              <Stack.Screen name='Moods' component={MoodScreen} />
              <Stack.Screen name='Explore' component={ExploreScreen} />
              <Stack.Screen name='Resources' component={ResourcesScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'modal', cardStyle: { backgroundColor: 'white'} }}>
              <Stack.Screen name="Modal1" component={ModalScreen} />
              <Stack.Screen name="Modal2" component={ModalScreen_2} />
              <Stack.Screen name="Modal3" component={ModalScreen_3} />
              <Stack.Screen name="Modal4" component={ModalScreen_4} />
              <Stack.Screen name='Anxious' component={AnxietyScreen} />
              <Stack.Screen name='Stress' component={StressScreen} />
              <Stack.Screen name='Sad' component={SadScreen} />
              <Stack.Screen name='Angry' component={AngryScreen} />
              <Stack.Screen name='Lonely' component={LonelyScreen} />
              <Stack.Screen name='Meditation' component={MeditationScreen} />
              <Stack.Screen name='Mindfulness' component={MindfulnessScreen} />
            </Stack.Group>
          </>
        ): (
                <Stack.Screen name='Auth' component={LoginNavigator}/>
        )}
    </Stack.Navigator>
    
  )
}

export { StackNavigator };