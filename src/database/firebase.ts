import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSG_SNDER_ID,
  appId: process.env.APP_ID
};

const firebaseApp = initializeApp(config);
const db = getFirestore();

export { addDoc, collection, db, getDocs };
