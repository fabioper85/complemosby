// src/firebase.ts
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Inserisci qui le tue credenziali Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCx6ddVhh6FUGGJJVgQaAcjXCotyQxdZVI',
  authDomain: 'my40mosbday.firebaseapp.com',
  projectId: 'my40mosbday',
  storageBucket: 'birthday-site-12345.appspot.com',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abc123def456',
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Inizializza servizi
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
