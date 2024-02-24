
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGw5p45xCsMbkegl_5TTjzrm_87g0gFkg",
  authDomain: "react-firebase-66b5a.firebaseapp.com",
  projectId: "react-firebase-66b5a",
  storageBucket: "react-firebase-66b5a.appspot.com",
  messagingSenderId: "364064474439",
  appId: "1:364064474439:web:1473f1ccb223a5104e3862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);