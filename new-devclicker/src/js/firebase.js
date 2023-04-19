
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG28G33SnwIt3qVJqV6-jgL8uB5mf5O44",
  authDomain: "devclicker-f1ab9.firebaseapp.com",
  databaseURL: "https://devclicker-f1ab9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "devclicker-f1ab9",
  storageBucket: "devclicker-f1ab9.appspot.com",
  messagingSenderId: "783794899095",
  appId: "1:783794899095:web:f35ca861315dab000dc1d2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { 
  db 
};