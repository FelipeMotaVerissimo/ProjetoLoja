import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'

function App() {

  return (
    <div className="app-container">
      {/* Seu cabeçalho e navegação aqui */}
      <main>
        <Outlet /> {/* Aqui serão renderizados Produtos ou Carrinho */}
      </main>
    </div>
  )
}

export default App;