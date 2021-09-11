import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY, // "AIzaSyAoM4LThh-Ga8vmxuWFZLd0cQxWDfZaMfw"
  authDomain: process.env.AUTH_DOMAIN, // "ecoleta-beta.firebaseapp.com"
  projectId: process.env.PROJECT_ID, // "ecoleta-beta"
  storageBucket: process.env.STORAGE_BUCKET, // "ecoleta-beta.appspot.com"
  messagingSenderId: process.env.MSG_SNDER_ID, // "867897420568"
  appId: process.env.APP_ID // "1:867897420568:web:0b6fe36e17ff88f9bf0c6d"
};

const firebaseApp = initializeApp(config);
const db = getFirestore();

export { addDoc, collection, db, getDocs };
