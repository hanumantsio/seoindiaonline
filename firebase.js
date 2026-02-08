// firebase.js (central config)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpMfebvCejqvlwoU7mVQXB500iE9xo8_8",
  authDomain: "seoindiaonline-dec25.firebaseapp.com",
  projectId: "seoindiaonline-dec25",
  storageBucket: "seoindiaonline-dec25.firebasestorage.app",
  messagingSenderId: "657989422876",
  appId: "1:657989422876:web:01f521dbc140af58e774d9",
  measurementId: "G-TS799JPTG6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export let analytics = null;
isSupported().then(ok => {
  if (ok) analytics = getAnalytics(app);
});
