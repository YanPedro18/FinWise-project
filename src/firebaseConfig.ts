import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUWzwFLlOw2jWx82uoOCbjF6tBDyjZR_A",
    authDomain: "finwise-project.firebaseapp.com",
    projectId: "finwise-project",
    storageBucket: "finwise-project.appspot.com",
    messagingSenderId: "100008535435",
    appId: "1:100008535435:web:f0e6ffef0c73fa4adbfb8e"
  };

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

