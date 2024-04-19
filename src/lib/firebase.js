// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXC1c39qb0HJwZkPb5r_3srq5T42iGHsk",
    authDomain: "visual-flow-fb1a1.firebaseapp.com",
    projectId: "visual-flow-fb1a1",
    storageBucket: "visual-flow-fb1a1.appspot.com",
    messagingSenderId: "41679352643",
    appId: "1:41679352643:web:f55884216fa8b0608c35f6",
    measurementId: "G-1DBS31Z3P6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

console.log("Firebase state : OK");

export { storage, getDownloadURL, listAll, ref, db };
