import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIugax2-pLiliSB43TdaozKf_PwXiFAMo",
  authDomain: "messanger-a7867.firebaseapp.com",
  projectId: "messanger-a7867",
  storageBucket: "messanger-a7867.appspot.com",
  messagingSenderId: "935861989446",
  appId: "1:935861989446:web:a4a1e83d24d57e0ac39a47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
