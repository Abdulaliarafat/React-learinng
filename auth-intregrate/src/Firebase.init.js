// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1UwCXOv_mDE1nkHMYhss4VVXG_GIQY4",
  authDomain: "auth-intregation-9d440.firebaseapp.com",
  projectId: "auth-intregation-9d440",
  storageBucket: "auth-intregation-9d440.firebasestorage.app",
  messagingSenderId: "1047175204810",
  appId: "1:1047175204810:web:ed81962ad3476387324933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
