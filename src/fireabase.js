import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD54EE8rtSxVyJ-46jwCUCmtwgOZUz695k",
    authDomain: "blitz-social-media-app.firebaseapp.com",
    databaseURL: "https://blitz-social-media-app.firebaseio.com",
    projectId: "blitz-social-media-app",
    storageBucket: "blitz-social-media-app.appspot.com",
    messagingSenderId: "820010931976"
  };

firebase.initializeApp(config);

export default firebase;
