// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVobcr3vDQbbsNel4bLdZVfqrticI6kcE",
  authDomain: "student-performance-fc087.firebaseapp.com",
  projectId: "student-performance-fc087",
  storageBucket: "student-performance-fc087.firebasestorage.app",
  messagingSenderId: "411463802497",
  appId: "1:411463802497:web:27552d7de17a4087cc7780",
  measurementId: "G-87SFZ4M18P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };