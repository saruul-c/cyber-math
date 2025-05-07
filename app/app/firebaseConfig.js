// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNzFwdkAZK0AIQP6hsakWNxk5V88EGs50",
  authDomain: "cyber-math.firebaseapp.com",
  projectId: "cyber-math",
  storageBucket: "cyber-math.firebasestorage.app",
  messagingSenderId: "213685547718",
  appId: "1:213685547718:web:4f9a30529f612d3a7f5dc7",
  measurementId: "G-20NV9CDSE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);