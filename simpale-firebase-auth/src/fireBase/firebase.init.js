// .................Don't share publically...........

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DHTN2H_3l7kCHowgI3baG9SS5nnccE8",
  authDomain: "simple-firebase-auth-d260a.firebaseapp.com",
  projectId: "simple-firebase-auth-d260a",
  storageBucket: "simple-firebase-auth-d260a.firebasestorage.app",
  messagingSenderId: "390541338668",
  appId: "1:390541338668:web:469bfeefc530499d018989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 