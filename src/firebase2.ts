// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "visiontech---main.firebaseapp.com",
  projectId: "visiontech---main",
  storageBucket: "visiontech---main.firebasestorage.app",
  messagingSenderId: "211700006261",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MESURNMENT_ID
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApps()[0];


// For Authentication
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Google analatics
// export const analytics = getAnalytics(app);