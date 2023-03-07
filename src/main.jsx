import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rKYKHJ7p7T9Cww2xVKQ7PtejHhgv91Q",
  authDomain: "coder-tiendita.firebaseapp.com",
  projectId: "coder-tiendita",
  storageBucket: "coder-tiendita.appspot.com",
  messagingSenderId: "120119864805",
  appId: "1:120119864805:web:2194d3812e0f6165d3130c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
