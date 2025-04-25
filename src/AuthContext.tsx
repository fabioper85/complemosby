// src/AuthContext.tsx
import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {User, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged} from 'firebase/auth';
import {auth, db} from './firebase';
import {doc, getDoc} from 'firebase/firestore';

interface AuthContextProps {
  currentUser: User | null;
  isAdmin: boolean;
  loading: boolean;
  error: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve essere usato all'interno di un AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Verifica se l'utente è admin
  const checkAdminStatus = async (user: User) => {
    if (!user) return false;

    try {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      return userDoc.exists() && userDoc.data()?.role === 'ADMIN';
    } catch (err) {
      console.error('Errore nella verifica dello stato admin:', err);
      return false;
    }
  };

  // Effettua login
  const login = async (email: string, password: string) => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const adminStatus = await checkAdminStatus(userCredential.user);
      setIsAdmin(adminStatus);
    } catch (err) {
      setError('Credenziali non valide. Riprova.');
      throw err;
    }
  };

  // Effettua logout
  const logout = async () => {
    setError('');
    try {
      await firebaseSignOut(auth);
      setIsAdmin(false);
    } catch (err) {
      setError('Errore durante il logout. Riprova.');
      throw err;
    }
  };

  // Controlla stato autenticazione all'avvio
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const adminStatus = await checkAdminStatus(user);
        setIsAdmin(adminStatus);
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isAdmin,
    loading,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
