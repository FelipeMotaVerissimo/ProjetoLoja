import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import TelaLogin from './TelaLogin.jsx'
import Produtos from './components/Produtos/Produtos.jsx'
import Carrinho from './components/Carrinho/Carrinho.jsx'
import PrivateRoute from './PrivateRoute.jsx' // <-- importa aqui

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/" element={<App />}>
          <Route
            path="produtos"
            element={
              <PrivateRoute>
                <Produtos />
              </PrivateRoute>
            }
          />
          <Route
            path="carrinho"
            element={
              <PrivateRoute>
                <Carrinho />
              </PrivateRoute>
            }
          />
         <Route
  index
  element={
    <Navigate
      to={localStorage.getItem('isLoggedIn') === 'true' ? '/produtos' : '/login'}
      replace
    />
  }
/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
