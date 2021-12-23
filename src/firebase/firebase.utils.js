import firebase from "firebase/compat/app";
import "firebase/compat/database";
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

export const database = firebase.database;

const googleProvider = new GoogleAuthProvider();
// googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// googleProvider.setCustomParameters({
//   prompt: "select_account",
//   //   login_hint: "user@example.com",
// });
export const auth = getAuth();

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  });

const fbProvider = new FacebookAuthProvider();
// fbProvider.addScope("user_birthday");
fbProvider.setCustomParameters({
  display: "popup",
});

export const signInWithFacebook = () =>
  signInWithPopup(auth, fbProvider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(error);
      // ...
    });
export default firebase;
