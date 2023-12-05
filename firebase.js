import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAR7__wYgp4Iua3L0Pz7mi07xpnK5u426c",
  authDomain: "bright-a47b2.firebaseapp.com",
  projectId: "bright-a47b2",
  storageBucket: "bright-a47b2.appspot.com",
  messagingSenderId: "563519245725",
  appId: "1:563519245725:web:7d070b678e4ace2087f374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };