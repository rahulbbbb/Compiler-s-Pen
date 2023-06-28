import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAcJIELM-N3XVAAnR4jAxoeh8YZIOQY0c",
  authDomain: "fullstack-blog-site.firebaseapp.com",
  projectId: "fullstack-blog-site",
  storageBucket: "fullstack-blog-site.appspot.com",
  messagingSenderId: "506243604908",
  appId: "1:506243604908:web:6ca481fdc3e3cf22dcda09"
};


const app = initializeApp(firebaseConfig); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
