import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzXfMKVS81seEe45-ndH49RL1H3b9EaS4",
  authDomain: "crwn-db-9d148.firebaseapp.com",
  databaseURL: "https://crwn-db-9d148.firebaseio.com",
  projectId: "crwn-db-9d148",
  storageBucket: "crwn-db-9d148.appspot.com",
  messagingSenderId: "108373930019",
  appId: "1:108373930019:web:32469fc20b5d10a0498196",
  measurementId: "G-FGF3F7BRYY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
