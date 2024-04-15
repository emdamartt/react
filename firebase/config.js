// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0VoKxD6af1UmhTgvkLRpp79nCn4_pgGo",
    authDomain: "db-shop-948ac.firebaseapp.com",
    projectId: "db-shop-948ac",
    storageBucket: "db-shop-948ac.appspot.com",
    messagingSenderId: "1031123464153",
    appId: "1:1031123464153:web:0ccf326a829f56ea46b3c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)