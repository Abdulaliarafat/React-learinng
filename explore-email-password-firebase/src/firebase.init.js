// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvJ9TtUK3yjp3Kwg5jlJ71Y6cT5ZpDawc",
  authDomain: "explore-email-password-87f71.firebaseapp.com",
  projectId: "explore-email-password-87f71",
  storageBucket: "explore-email-password-87f71.firebasestorage.app",
  messagingSenderId: "758510960702",
  appId: "1:758510960702:web:220761aeb7d3c8fbca116f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)