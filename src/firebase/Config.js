import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBYparpMReLvaJdU1a3waFVU-qWHUNUVcE",
  authDomain: "login-d5311.firebaseapp.com",
  databaseURL: "https://login-d5311.firebaseio.com",
  projectId: "login-d5311",
  storageBucket: "login-d5311.appspot.com",
  messagingSenderId: "36114016415",
  appId: "1:36114016415:web:149a475e74898f69fb5aaa"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
