import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCMgMivuS9QwMlZgwy3pBThs6WEjWb-gLw",
    authDomain: "first-fa9c4.firebaseapp.com",
    projectId: "first-fa9c4",
    storageBucket: "first-fa9c4.appspot.com",
    messagingSenderId: "535211190155",
    appId: "1:535211190155:web:50177c3758e05f82dab18e",
    measurementId: "G-Y2P1SRQL85"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)