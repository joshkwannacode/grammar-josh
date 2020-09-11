import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDPvctHcOd7xub219Et47be8rb4GKBnEzo",
    authDomain: "grammar-app-react.firebaseapp.com",
    databaseURL: "https://grammar-app-react.firebaseio.com",
    projectId: "grammar-app-react",
    storageBucket: "",
    messagingSenderId: "62506140350",
    appId: "1:62506140350:web:2308a4593ed65a0bed94ef"
  };


   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 

  export default firebase;