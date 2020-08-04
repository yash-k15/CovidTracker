import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAHGocRGO9CvbP2f9K6JtzD3Hzr9eD_a50",
    authDomain: "messageboard-40c63.firebaseapp.com",
    databaseURL: "https://messageboard-40c63.firebaseio.com",
    projectId: "messageboard-40c63",
    storageBucket: "messageboard-40c63.appspot.com",
    messagingSenderId: "978197890666",
    appId: "1:978197890666:web:d94315760205f96a62ec13",
    measurementId: "G-WCQ4ZD2HHN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('posts/')