import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
console.log('firebase running');

const app = initializeApp(firebaseConfig)

// for testing
const db = getFirestore(app);

export const getArticles = async () => {
  const articleCollection = collection(db, 'article')
  const articleSnapshot = await getDocs(articleCollection) 
  const articleList = articleSnapshot.docs.map(doc => doc.data())

  console.log(articleList)
}