import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5QRGfU-o_g3Sw0g3ACzLzIMsKFjWMfvI",
    authDomain: "twitter-clone-92389.firebaseapp.com",
    databaseURL: "https://twitter-clone-92389.firebaseio.com",
    projectId: "twitter-clone-92389",
    storageBucket: "twitter-clone-92389.appspot.com",
    messagingSenderId: "931975810573",
    appId: "1:931975810573:web:b56c5c61f8f3d58a940f44",
    measurementId: "G-ZLKJZRR9ZC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;