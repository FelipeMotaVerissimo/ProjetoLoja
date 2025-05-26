import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import './index.css';

import TelaLogin from './TelaLogin';
import Produtos from './components/Produtos/Produtos';
import PrivateRoute from './PrivateRoute';
import DashboardProdutos from './pages/DashboardProdutos';
import CriarProduto from './pages/CriarProduto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Navigate
                to={localStorage.getItem('isLoggedIn') === 'true' ? '/produtos' : '/login'}
                replace
              />
            }
          />

          {/* Loja (pública) */}
          <Route path="produtos" element={<Produtos />} />

          {/* Painel administrativo (protegido) */}
          <Route
            path="dashboard/produtos"
            element={
              <PrivateRoute>
                <DashboardProdutos />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/criar"
            element={
              <PrivateRoute>
                <CriarProduto />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);