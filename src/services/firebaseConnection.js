import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {

    apiKey: "AIzaSyASAKCG9LPF7_58g9lCLW4uCbc7oe4PQjQ",
    authDomain: "sistema-de-chamados-56cb9.firebaseapp.com",
    projectId: "sistema-de-chamados-56cb9",
    storageBucket: "sistema-de-chamados-56cb9.appspot.com",
    messagingSenderId: "185839998637",
    appId: "1:185839998637:web:283e7c583d3d593ae25824",
    measurementId: "G-EH5QTVLHPC"
  
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase
 