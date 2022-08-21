import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCx0JV1yeQy6686dsFrxyJ3nw_ENiMfEVA",
    authDomain: "sekolahroboturdc.firebaseapp.com",
    projectId: "sekolahroboturdc",
    storageBucket: "sekolahroboturdc.appspot.com",
    messagingSenderId: "45173038489",
    appId: "1:45173038489:web:4803332cd213da14cc8708",
    databaseURL: "https://sekolahroboturdc-default-rtdb.asia-southeast1.firebasedatabase.app",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export default database;