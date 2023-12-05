import { View, Text, Button} from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, GoogleAuthProvider, signInWithCredential, onAuthStateChanged, signOut} from 'firebase/auth';




WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '563519245725-65soetdem28ph8vb9drj90c2p3o21gnu.apps.googleusercontent.com',
    },
  );

  const [ user, setUser ] = useState('');
  const [loadingInitial, setLoadingInitial ] = useState(true);
  const auth = getAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const logout =  () => {
    setLoading(true)

    signOut(auth).catch(error => setError(error)).finally(() => setLoading(false));
  } 

  

  React.useEffect(() => {    
    if (response?.type === 'success') {
      const {id_token} = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(
    () => 
    onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);
    } else {
        setUser(null)
    }

    setLoadingInitial(false);
}),
[]
);

  return (
    <AuthContext.Provider value={{user, loading, error, logout, promptAsync}}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
    return useContext(AuthContext);
}


