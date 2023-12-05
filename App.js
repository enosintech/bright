import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './hooks/useAuth';
import { StackNavigator } from './navigation/Stack';

const theme = {
  colors: {
    background: 'white',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <AuthProvider>
        <StackNavigator />
        <StatusBar style='auto'/>
      </AuthProvider>
    </NavigationContainer>
  );
}

