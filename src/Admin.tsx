// src/Admin.tsx
import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import {auth, db} from './firebase';
import {signInWithEmailAndPassword, signOut, User} from 'firebase/auth';
import {collection, getDocs, query, orderBy, Timestamp} from 'firebase/firestore';
import {User as UserIcon, LogOut, UserCheck, Lock} from 'lucide-react';
import {Presenza} from './types';

const Admin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [presenze, setPresenze] = useState<Presenza[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Controlla se l'utente è autenticato
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchPresenze();
      }
    });

    return () => unsubscribe();
  }, []);

  // Login
  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Credenziali non valide. Riprova.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Errore durante il logout:', err);
    }
  };

  // Recupera le presenze dal database
  const fetchPresenze = async (): Promise<void> => {
    setLoading(true);
    try {
      const q = query(collection(db, 'presenze'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);

      const presenzeData: Presenza[] = [];
      querySnapshot.forEach((doc) => {
        presenzeData.push({
          id: doc.id,
          ...doc.data(),
        } as Presenza);
      });

      setPresenze(presenzeData);
    } catch (err) {
      console.error('Errore durante il recupero delle presenze:', err);
    } finally {
      setLoading(false);
    }
  };

  // Conteggio totale degli ospiti
  const totalGuests = presenze.reduce((total, presenza) => {
    return total + presenza.ospiti.length;
  }, 0);

  // Conteggio allergie
  const allergyCount = presenze.reduce(
    (count, presenza) => {
      const allergies = presenza.allergie;

      if (allergies.glutine) count.glutine++;
      if (allergies.lattosio) count.lattosio++;
      if (allergies.fruttaDiMare) count.fruttaDiMare++;
      if (allergies.fruttaSecca) count.fruttaSecca++;

      return count;
    },
    {glutine: 0, lattosio: 0, fruttaDiMare: 0, fruttaSecca: 0}
  );

  // Formatta la data
  const formatDate = (timestamp: Timestamp | undefined): string => {
    if (!timestamp || !timestamp.toDate) return '-';

    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-6'>
      <div className='max-w-4xl mx-auto'>
        <header className='py-6 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-pink-500'>Admin Panel</h1>
          {user && (
            <button
              className='px-4 py-2 bg-pink-600 rounded-lg flex items-center hover:bg-pink-700 transition-colors'
              onClick={handleLogout}
            >
              <LogOut className='w-4 h-4 mr-2' />
              Logout
            </button>
          )}
        </header>

        {!user ? (
          <div className='bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Accedi</h2>

            {error && (
              <div className='bg-red-500 bg-opacity-25 border border-red-500 text-white p-3 rounded-lg mb-4'>
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className='mb-4'>
                <label className='block text-sm mb-1'>Email</label>
                <div className='flex items-center bg-purple-700 rounded overflow-hidden'>
                  <div className='p-2 bg-purple-600'>
                    <UserIcon className='w-5 h-5' />
                  </div>
                  <input
                    type='email'
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className='w-full bg-purple-700 p-2 text-white'
                    required
                  />
                </div>
              </div>

              <div className='mb-6'>
                <label className='block text-sm mb-1'>Password</label>
                <div className='flex items-center bg-purple-700 rounded overflow-hidden'>
                  <div className='p-2 bg-purple-600'>
                    <Lock className='w-5 h-5' />
                  </div>
                  <input
                    type='password'
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    className='w-full bg-purple-700 p-2 text-white'
                    required
                  />
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-pink-600 py-3 rounded-lg text-xl font-bold hover:bg-pink-700 transition-colors'
                disabled={loading}
              >
                {loading ? 'Accesso in corso...' : 'Accedi'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center'>
                <h3 className='text-xl font-bold mb-2'>Totale Conferme</h3>
                <p className='text-4xl font-bold text-pink-500'>{presenze.length}</p>
              </div>

              <div className='bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center'>
                <h3 className='text-xl font-bold mb-2'>Totale Ospiti</h3>
                <p className='text-4xl font-bold text-pink-500'>{totalGuests}</p>
              </div>

              <div className='bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center'>
                <button
                  onClick={fetchPresenze}
                  className='bg-pink-600 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors mx-auto'
                  disabled={loading}
                >
                  <UserCheck className='w-5 h-5 mr-2' />
                  {loading ? 'Aggiornamento...' : 'Aggiorna dati'}
                </button>
              </div>
            </div>

            <div className='bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg mb-8'>
              <h2 className='text-2xl font-bold mb-4'>Allergie</h2>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-purple-700 p-3 rounded-lg text-center'>
                  <h3 className='font-bold mb-1'>Glutine</h3>
                  <p>{allergyCount.glutine}</p>
                </div>
                <div className='bg-purple-700 p-3 rounded-lg text-center'>
                  <h3 className='font-bold mb-1'>Lattosio</h3>
                  <p>{allergyCount.lattosio}</p>
                </div>
                <div className='bg-purple-700 p-3 rounded-lg text-center'>
                  <h3 className='font-bold mb-1'>Frutta di mare</h3>
                  <p>{allergyCount.fruttaDiMare}</p>
                </div>
                <div className='bg-purple-700 p-3 rounded-lg text-center'>
                  <h3 className='font-bold mb-1'>Frutta secca</h3>
                  <p>{allergyCount.fruttaSecca}</p>
                </div>
              </div>
            </div>

            <div className='bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4'>Lista Presenze</h2>

              {loading ? (
                <p className='text-center py-4'>Caricamento in corso...</p>
              ) : presenze.length === 0 ? (
                <p className='text-center py-4'>Nessuna presenza confermata.</p>
              ) : (
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b border-purple-600'>
                        <th className='py-2 px-4 text-left'>Data</th>
                        <th className='py-2 px-4 text-left'>Ospiti</th>
                        <th className='py-2 px-4 text-left'>Allergie</th>
                        <th className='py-2 px-4 text-left'>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {presenze.map((presenza) => (
                        <tr key={presenza.id} className='border-b border-purple-700'>
                          <td className='py-3 px-4'>{formatDate(presenza.timestamp)}</td>
                          <td className='py-3 px-4'>
                            <ul>
                              {presenza.ospiti.map((ospite, idx) => (
                                <li key={idx}>
                                  {ospite.name} {ospite.surname}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className='py-3 px-4'>
                            <ul>
                              {presenza.allergie.glutine && <li>Glutine</li>}
                              {presenza.allergie.lattosio && <li>Lattosio</li>}
                              {presenza.allergie.fruttaDiMare && <li>Frutta di mare</li>}
                              {presenza.allergie.fruttaSecca && <li>Frutta secca</li>}
                            </ul>
                          </td>
                          <td className='py-3 px-4'>{presenza.allergie.altro || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
