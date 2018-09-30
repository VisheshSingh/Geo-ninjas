import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyANsrZcoq4hJbNQdCJYKK7CDlYQgCDwcJU",
  authDomain: "geo-ninjas-eabe6.firebaseapp.com",
  databaseURL: "https://geo-ninjas-eabe6.firebaseio.com",
  projectId: "geo-ninjas-eabe6",
  storageBucket: "geo-ninjas-eabe6.appspot.com",
  messagingSenderId: "108977799705"
};
var firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
