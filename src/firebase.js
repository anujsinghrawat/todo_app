// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyCahWpO3nYw4YIbE_WHBxiX1IThdOL9xNE",
    authDomain: "todo-app-73434.firebaseapp.com",
    projectId: "todo-app-73434",
    storageBucket: "todo-app-73434.appspot.com",
    messagingSenderId: "991635186176",
    appId: "1:991635186176:web:2dde230e5766219284eee5",
    measurementId: "G-PHWBQWFCWW"
});

const db= firebaseApp.firestore();
export default db;