// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLDsyEVXJQFCyGHkP8Jlcxxa5VOoup3UQ",
    authDomain: "work-47389.firebaseapp.com",
    projectId: "work-47389",
    storageBucket: "work-47389.appspot.com",
    messagingSenderId: "397902717865",
    appId: "1:397902717865:web:ad6df2816a49850e96dab8",
    measurementId: "G-EXB6HPFBS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };