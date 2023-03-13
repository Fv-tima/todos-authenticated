import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDk6NIcDhKAmpB11gT2KiStCPrdyrE7buE",
  authDomain: "fir-a-883d7.firebaseapp.com",
  projectId: "fir-a-883d7",
  storageBucket: "fir-a-883d7.appspot.com",
  messagingSenderId: "670820558321",
  appId: "1:670820558321:web:7d16a0b11c21144c515050",
  measurementId: "G-VG9G74TDV6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
