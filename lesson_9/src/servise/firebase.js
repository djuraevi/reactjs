import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBF3J6CrIa7zo5LPHrc-PYE7rbQy_u0Xxw",
  authDomain: "fir-djuraev.firebaseapp.com",
  projectId: "fir-djuraev",
  storageBucket: "fir-djuraev.appspot.com",
  messagingSenderId: "493552410430",
  appId: "1:493552410430:web:770bb9dfd25e15e4bc166f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();