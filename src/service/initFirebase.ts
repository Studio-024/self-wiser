import 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { collection, doc, setDoc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { keys } from '../../.env'

const firebaseConfig = {
  apiKey: keys.FIREBASE_API_KEY,
  authDomain: keys.FIREBASE_AUTH_DOMAIN,
  projectId: keys.FIREBASE_PROJECT_ID,
  storageBucket: keys.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: keys.FIREBASE_MESSAGING_SENDER_ID,
  appId: keys.FIREBASE_APP_ID,
  measurementId: keys.FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig)

// for testing
export const db = getFirestore(app);

export const insertArticle = async(article: any) => {
  await setDoc(doc(db, "article", "artigotest"), article);
}

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