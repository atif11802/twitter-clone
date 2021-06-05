import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWzwmajCK8iI8t_fi37LHv9vpV_R0idBw",
  authDomain: "twitter-clone-ae4cb.firebaseapp.com",
  projectId: "twitter-clone-ae4cb",
  storageBucket: "twitter-clone-ae4cb.appspot.com",
  messagingSenderId: "663467661404",
  appId: "1:663467661404:web:faa24293c4236cdc74ee99"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
