// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr4d7ayarE9HS7iiRHDpvgNgkOL60jax4",
  authDomain: "dreagun-news-auth.firebaseapp.com",
  projectId: "dreagun-news-auth",
  storageBucket: "dreagun-news-auth.firebasestorage.app",
  messagingSenderId: "892272886094",
  appId: "1:892272886094:web:e8de4f79910ae4fbb29e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;