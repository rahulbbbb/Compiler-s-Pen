import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALIOffmdHcIcSjW6OuLGUtzsjfcUlrUz8",
  authDomain: "blog-site-74523.firebaseapp.com",
  projectId: "blog-site-74523",
  storageBucket: "blog-site-74523.appspot.com",
  messagingSenderId: "268642626760",
  appId: "1:268642626760:web:0eec32c139ddec042189fd",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
console.log("auth");
console.log(auth);
