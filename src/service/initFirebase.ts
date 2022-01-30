import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

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


export const getArticleById = async (id: string) => {
  const docRef = doc(db, "article", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log('ocorreu um erro')
  }
}

export const getWritterById = async (id: string) => {
  const docRef = doc(db, "writter", id);
  const docSnap: any = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log('ocorreu um erro')
  }
}

export const getDocsBySlugName = async (slug: string) => {
  const q = query(collection(db, "article"), where("slug", "==", slug));

  const querySnapshot = await getDocs(q);

  let response : any //Depois a gente vê isso

  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    response = doc.data()
  });

  return response
}