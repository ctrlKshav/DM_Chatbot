import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Admin from './Admin';
import './main.css';
await import('katex/dist/katex.min.css');

import './i18n';
import { BrowserRouter, Routes, Route } from 'react-router';
import UserAuthProvider from './context/UserAuthProvider';
import AdminAuthProvider from './context/AdminAuthProvider';
// import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAuthProvider />} />
          <Route path="/admin" element={<AdminAuthProvider />} />
        </Routes>
    </BrowserRouter>
  </>
);
