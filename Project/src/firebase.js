import firebase from 'firebase';
import "firebase/storage";

const firebaseApp = firebase.initializeApp({

apiKey: "AIzaSyDKTPnCRXQvYxn91_vmmpmcn7MNdfg7HCE",
authDomain: "ig-clone-62056.firebaseapp.com",
projectId: "ig-clone-62056",
storageBucket: "ig-clone-62056.appspot.com",
messagingSenderId: "214326112542",
appId: "1:214326112542:web:2d76ffb1b2f12ee7ab590f",
measurementId: "G-39GFD0W40C"

});

  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export { db, auth, storage };

  // export default db;
