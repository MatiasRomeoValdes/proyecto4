// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoUkrZ3P5dgBspzkO3U9-wPKDJuFRUJFc",
  authDomain: "proyecto4-21537.firebaseapp.com",
  projectId: "proyecto4-21537",
  storageBucket: "proyecto4-21537.appspot.com",
  messagingSenderId: "139482754492",
  appId: "1:139482754492:web:91fa5c7c6a39ed57ed0fb9",
  measurementId: "G-N2EV0J34K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const db = getFirestore(); 
//export default db;