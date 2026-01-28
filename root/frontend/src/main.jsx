import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import "firebase/app"
import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxDxIih_c5D13gUA_MLJMXQVoRXqxQMv4",
  authDomain: "an-app-of-apps.firebaseapp.com",
  projectId: "an-app-of-apps",
  storageBucket: "an-app-of-apps.firebasestorage.app",
  messagingSenderId: "610362206722",
  appId: "1:610362206722:web:6b5855c16f6ddb342b151b",
  measurementId: "G-1CL6E6RY7Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
