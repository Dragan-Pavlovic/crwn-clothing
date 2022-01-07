import firebase from "firebase/compat/app";
import { doc, setDoc } from "firebase/compat/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyCfWc_9qekQKzgW2tfd-N5ofumem4YeNt0",
  authDomain: "crwn-db-49af9.firebaseapp.com",
  projectId: "crwn-db-49af9",
  storageBucket: "crwn-db-49af9.appspot.com",
  messagingSenderId: "291470717198",
  appId: "1:291470717198:web:7fb5a90d960b1b34e6a75f",
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  try {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = Date.now();

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    }

    return userRef;
  } catch (err) {
    console.log(err.message);
  }
};

//mimicing promise based checking for user session validity
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  try {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    for (let key of Object.keys(objectsToAdd)) {
      const newDocRef = collectionRef.doc();
      const objectToAdd = {
        title: objectsToAdd[key].title,
        items: objectsToAdd[key].items,
      };
      batch.set(newDocRef, objectToAdd);
    }

    return await batch.commit();
  } catch (err) {
    console.log(err.message);
  }
};

export const database = firebase.database;

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    const collectionName = collection.title.toLowerCase();
    acc[collectionName] = collection;
    return acc;
  }, {});
};

export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const fbProvider = new FacebookAuthProvider();
fbProvider.setCustomParameters({
  display: "popup",
});

export default firebase;
