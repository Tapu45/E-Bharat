// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "##api key",
  authDomain: "e-commerce-a6da9.firebaseapp.com",
  projectId: "e-commerce-a6da9",
  storageBucket: "e-commerce-a6da9.appspot.com",
  messagingSenderId: "849054866902",
  appId: "1:849054866902:web:2997fb294a5db47e141877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
