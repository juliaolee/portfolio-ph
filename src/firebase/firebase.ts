// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ0xZ0v19ut2IcTUmxhuCnEU2885UVMQA",
  authDomain: "portfolio-ph-b7188.firebaseapp.com",
  projectId: "portfolio-ph-b7188",
  storageBucket: "portfolio-ph-b7188.firebasestorage.app",
  messagingSenderId: "986798124249",
  appId: "1:986798124249:web:3d46dcee2666930b6c62c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
