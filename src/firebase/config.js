import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAjJGz7Bicg1MrDc81LIRqDCTz5sMIuj50",
  authDomain: "ldantas-learn-firebase.firebaseapp.com",
  databaseURL: "https://ldantas-learn-firebase.firebaseio.com",
  projectId: "ldantas-learn-firebase",
  storageBucket: "ldantas-learn-firebase.appspot.com",
  messagingSenderId: "912550901440",
  appId: "1:912550901440:web:76d7691637438fbc34df25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const 
  agStorage = firebase.storage(),
  agFirestore = firebase.firestore(),
  timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { agStorage, agFirestore, timestamp };
