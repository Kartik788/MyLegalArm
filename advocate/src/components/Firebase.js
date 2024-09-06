import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1FOEk9juU_uWqLHNgWWVoL9nfLnnxw28",
  authDomain: "advocates-74104.firebaseapp.com",
  projectId: "advocates-74104",
  storageBucket: "advocates-74104.appspot.com",
  messagingSenderId: "10552889468",
  appId: "1:10552889468:web:7f7665570b41f76fbcb9f9",
  measurementId: "G-74W28KWKSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app); 
export{auth,provider,db};