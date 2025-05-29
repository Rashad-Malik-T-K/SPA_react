import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaH4EUt-z3tKO82mD976kycFVOWpud_iE",
  authDomain: "student-performance-anal-42f38.firebaseapp.com",
  projectId: "student-performance-anal-42f38",
  storageBucket: "student-performance-anal-42f38.firebasestorage.app",
  messagingSenderId: "409076205168",
  appId: "1:409076205168:web:659c2cfebd962827d196b5",
  measurementId: "G-GQ52DVPWTN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };