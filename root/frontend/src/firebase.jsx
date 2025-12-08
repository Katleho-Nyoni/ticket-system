import * as firebase from "firebase/app";
import "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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