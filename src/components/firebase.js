// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIJGH8a1ljFIZY0TofTe3MYBodYbvnnyY",
    authDomain: "minihotel-1dbac.firebaseapp.com",
    projectId: "minihotel-1dbac",
    storageBucket: "minihotel-1dbac.appspot.com",
    messagingSenderId: "55524816420",
    appId: "1:55524816420:web:22c9e0935d222d7fa44ab1",
    measurementId: "G-CTHCNTE0B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, provider ,facebookProvider};
