// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
// import './themes/core/custom.css'; // Importa stili personalizzati
// import App from './App';
import './themes/minimal/custom.css'; // Importa stili personalizzati
import MinimalApp from './components/minimal/MinimalApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MinimalApp />
  </React.StrictMode>
);
