import firebase from 'firebase'
import '@firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  projectId: "apprunning-8c3f3",
  apiKey: "AIzaSyDD83EjGr38HJVopMrRucwE4Zuq1Ob-duY",
  authDomain: "apprunning-8c3f3.firebaseapp.com",
  databaseURL: "https://apprunning-8c3f3.firebaseio.com",
  storageBucket: "apprunning-8c3f3.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export default dbh