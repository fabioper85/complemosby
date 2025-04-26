// src/Header.tsx
import React from 'react';
import {Link} from 'react-router-dom';
import {LogOut, UserCog} from 'lucide-react';
import {useAuth} from '../../AuthContext';

const Header: React.FC = () => {
  const {currentUser, isAdmin, logout} = useAuth();

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
    } catch (err) {
      console.error('Errore durante il logout:', err);
    }
  };

  return (
    <header className='py-4 px-6 flex justify-between items-center bg-purple-900 bg-opacity-80'>
      <Link to='/' className='text-2xl font-bold text-pink-500'>
        Rock Birthday Party
      </Link>

      {currentUser && (
        <div className='flex items-center'>
          <span className='text-white mr-4'>{currentUser.email}</span>

          {isAdmin && (
            <Link
              to='/admin'
              className='px-4 py-2 bg-purple-700 text-white rounded-lg flex items-center mr-3 hover:bg-purple-800 transition-colors'
            >
              <UserCog className='w-4 h-4 mr-2' />
              Admin
            </Link>
          )}

          <button
            className='px-4 py-2 bg-pink-600 text-white rounded-lg flex items-center hover:bg-pink-700 transition-colors'
            onClick={handleLogout}
          >
            <LogOut className='w-4 h-4 mr-2' />
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
