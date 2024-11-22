import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQZ-2pl0ZSzOX_2C_Unhou5LEDb6BK49E",
    authDomain: "feedback-system-c41ca.firebaseapp.com",
    projectId: "feedback-system-c41ca",
    storageBucket: "feedback-system-c41ca.firebasestorage.app",
    messagingSenderId: "487869519354",
    appId: "1:487869519354:web:b5b86e9d212c1a8ca1c043"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
