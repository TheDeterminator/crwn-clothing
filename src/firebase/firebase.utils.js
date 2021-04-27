import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjNVdJ9p2QR7wrgwe6yAI-Cu8O4n8b4Yw",
  authDomain: "crwn-db-f711f.firebaseapp.com",
  projectId: "crwn-db-f711f",
  storageBucket: "crwn-db-f711f.appspot.com",
  messagingSenderId: "208671485103",
  appId: "1:208671485103:web:88694bfbdda256d880385a",
  measurementId: "G-8NSW3FTP17",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
