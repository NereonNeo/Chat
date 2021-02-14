import firebase from 'firebase';
const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA-uqwztKSq1EjsDFkinOlKvsf85GW5Mu0',
  authDomain: 'mychat-d1962.firebaseapp.com',
  projectId: 'mychat-d1962',
  storageBucket: 'mychat-d1962.appspot.com',
  messagingSenderId: '731896777595',
  appId: '1:731896777595:web:0fa7bdff96f0f5a6e94bde',
});

const db = firebase.firestore();
export { db };
