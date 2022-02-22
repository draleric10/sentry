// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import admin from 'firebase-admin'
import { applicationDefault, initializeApp as initializeAdminApp } from 'firebase-admin/app'

require("dotenv").config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

if(!admin.apps.length){
    initializeAdminApp({
        credential: applicationDefault,
        databaseURL: "https://sentry-dev-664e0-default-rtdb.asia-southeast1.firebasedatabase.app"
      });
}

// Firestore
const db = admin.firestore();


// Initialize Firebase
let Firebase;

if(!Firebase?.apps?.length) {
    Firebase = initializeApp(firebaseConfig)
}

export { db };
