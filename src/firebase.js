import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB4aNzDgHPfDfTJ1PDgLLWEpYT_ALKZEyI',
  authDomain: 'linkedin-clone-d9b78.firebaseapp.com',
  projectId: 'linkedin-clone-d9b78',
  storageBucket: 'linkedin-clone-d9b78.appspot.com',
  messagingSenderId: '822650186446',
  appId: '1:822650186446:web:d6ecbb9ff2f05c6270be9f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
