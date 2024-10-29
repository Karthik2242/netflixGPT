// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp314HISzp-eEa3trCt-0Q6_d5R6arZXc",
  authDomain: "netflixgpt-37ebb.firebaseapp.com",
  projectId: "netflixgpt-37ebb",
  storageBucket: "netflixgpt-37ebb.appspot.com",
  messagingSenderId: "534338924713",
  appId: "1:534338924713:web:c7c00ceb0b74d3ed92f9b8",
  measurementId: "G-VDY78T8KTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();