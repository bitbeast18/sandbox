import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYCqcFWMD9JOF7v-BHmsSQy3woUjKcseI",
  authDomain: "sandbox-d4062.firebaseapp.com",
  databaseURL: "https://sandbox-d4062.firebaseio.com",
  projectId: "sandbox-d4062",
  storageBucket: "sandbox-d4062.appspot.com",
  messagingSenderId: "763125685406",
  appId: "1:763125685406:web:d891523ac5575b1e64af8f",
  measurementId: "G-X0FQMW3ZNT"
};

firebase.initializeApp(firebaseConfig);

export let db = firebase.firestore();
export let auth = firebase.auth();
