// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUXiJEzcyahKCn0I1REVdr8sJjUyLu2yM",
  authDomain: "fir-auth-9581c.firebaseapp.com",
  projectId: "fir-auth-9581c",
  storageBucket: "fir-auth-9581c.appspot.com",
  messagingSenderId: "297344890533",
  appId: "1:297344890533:web:28b973200c3ac17c84ff4c",
  measurementId: "G-RTGYTGN4S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();

export const analytics = getAnalytics();