import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDcYrKXTKxajIOvR1eHtQ81ME3r37fw_a4",
  authDomain: "react-todo-list-51376.firebaseapp.com",
  databaseURL: "https://react-todo-list-51376.firebaseio.com",
  projectId: "react-todo-list-51376",
  storageBucket: "react-todo-list-51376.appspot.com",
  messagingSenderId: "805510766515",
  appId: "1:805510766515:web:60d151ccfbdfa8bed6b5c6",
});

export const db = app.firestore();
