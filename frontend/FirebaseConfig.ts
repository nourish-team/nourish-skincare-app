import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIF9W3GUIvBWPs_xV-rZEqKJPsYb1Ctc8",
  authDomain: "nourish-app-authentication.firebaseapp.com",
  projectId: "nourish-app-authentication",
  storageBucket: "nourish-app-authentication.appspot.com",
  messagingSenderId: "487496435520",
  appId: "1:487496435520:web:a7ba1aad2336e3b8849ca5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);