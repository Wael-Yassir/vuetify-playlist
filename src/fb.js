// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXO7iWQcyHkz1PExj7DUFGEribga-Fwx4",
  authDomain: "todo-ninja-971c2.firebaseapp.com",
  projectId: "todo-ninja-971c2",
  storageBucket: "todo-ninja-971c2.appspot.com",
  messagingSenderId: "840377463596",
  appId: "1:840377463596:web:abcc6c42e8ec7a80633289",
  measurementId: "G-CXJNRX7G1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConfig);
getAnalytics(app);

export default db;