// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA1aUN3wQQEBB19qvfNX3nFxDeBTduBF8M",
  authDomain: "rustamiel.firebaseapp.com",
  projectId: "rustamiel",
  storageBucket: "rustamiel.appspot.com",
  messagingSenderId: "347601460929",
  appId: "1:347601460929:web:1a389d06ec675a782c3e40",
  measurementId: "G-R83VR2QY9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);
export default app;