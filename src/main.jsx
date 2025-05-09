import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import TelaLogin from './TelaLogin.jsx'
import Produtos from './components/Produtos/Produtos.jsx'
import Carrinho from './components/Carrinho/Carrinho.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/" element={<App />}>
          <Route path="produtos" element={<Produtos />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route index element={<Navigate to="/produtos" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)