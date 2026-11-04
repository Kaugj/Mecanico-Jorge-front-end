import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from '@/shared/auth/AuthContext';
import '@/shared/styles/tokens.css';
import '@/shared/styles/global.css';

// Ponto de entrada: roteamento por URL + sessão de login disponível em todo o app.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
