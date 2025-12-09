import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyBOmFKYokDt_1ETFj_X2KoNDJNERZffgJI",
  authDomain: "ticketsystem-d8beb.firebaseapp.com",
  projectId: "ticketsystem-d8beb",
  storageBucket: "ticketsystem-d8beb.firebasestorage.app",
  messagingSenderId: "381712326260",
  appId: "1:381712326260:web:fe8062264c5cbdb1497b21",
  measurementId: "G-X2WZFEEZVP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
