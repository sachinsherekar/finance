// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3C4cibGJ3uxbLkHmcCt_jg2dqB0Onvoc",
  authDomain: "financely-income-tracker.firebaseapp.com",
  projectId: "financely-income-tracker",
  storageBucket: "financely-income-tracker.appspot.com",
  messagingSenderId: "832558544584",
  appId: "1:832558544584:web:055360c96f4b5883de97fd",
  measurementId: "G-97D8SD0690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};