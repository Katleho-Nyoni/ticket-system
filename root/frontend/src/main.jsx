import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import "firebase/app"
import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
