import firebase from 'firebase';

// Initialize Firebase
  let config = {
    apiKey: "AIzaSyD54EE8rtSxVyJ-46jwCUCmtwgOZUz695k",
    authDomain: "blitz-social-media-app.firebaseapp.com",
    databaseURL: "https://blitz-social-media-app.firebaseio.com",
    projectId: "blitz-social-media-app",
    storageBucket: "blitz-social-media-app.appspot.com",
    messagingSenderId: "820010931976"
  };

export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

// export default firebase;
