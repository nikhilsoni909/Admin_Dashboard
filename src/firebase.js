import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import key from "./Key";
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    apiKey: key,
    authDomain: "fir-lamadev-69948.firebaseapp.com",
    projectId: "fir-lamadev-69948",
    storageBucket: "fir-lamadev-69948.appspot.com",
    messagingSenderId: "743038717773",
    appId: "1:743038717773:web:292c6b03d4a30750e13104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
