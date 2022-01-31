//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeD_cb4X015RfG70Or6KHKN5bBCBZD43c",
    authDomain: "whats-app-clone-97ab4.firebaseapp.com",
    projectId: "whats-app-clone-97ab4",
    storageBucket: "whats-app-clone-97ab4.appspot.com",
    messagingSenderId: "119587279025",
    appId: "1:119587279025:web:1eb3513b9b7e0ae87b9290",
    measurementId: "G-VEFVCT63ZT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;