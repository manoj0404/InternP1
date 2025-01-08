import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQjxF27F0t2AEobENd9_q1PfQjRbuzn5k",
  authDomain: "phone-971b3.firebaseapp.com",
  projectId: "phone-971b3",
  storageBucket: "phone-971b3.firebasestorage.app",
  messagingSenderId: "28626943216",
  appId: "1:28626943216:web:6084bcb3965f0527751635",
  measurementId: "G-SLHNPS5EN5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);