import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwGFu27tzdijBDTGhYbuqmBklvUPIDGaU",
    authDomain: "documaker-3d832.firebaseapp.com",
    projectId: "documaker-3d832",
    storageBucket: "documaker-3d832.appspot.com",
    messagingSenderId: "1070212416474",
    appId: "1:1070212416474:web:f3aec7c0962efd3e8776e3",
    measurementId: "G-BBQZ53H51N"
};

// Since we are using NEXT js SSR we need to make sure we don't initialize twice
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// Gives us access to db
const db = app.firestore();

export { db };