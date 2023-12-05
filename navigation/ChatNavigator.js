import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from '../screens/ChatScreen';
import ConnectScreen from '../screens/ConnectScreen';
import MatchedScreen from '../screens/MatchedScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#115e59' }
      }}>
        <Stack.Group>
          <Stack.Screen name='Connect' component={ConnectScreen} />
          <Stack.Screen name='Chat' component={ChatScreen} />
          <Stack.Screen name='Message' component={MessagesScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
          <Stack.Screen name='Match' component={MatchedScreen} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export { ChatNavigator };