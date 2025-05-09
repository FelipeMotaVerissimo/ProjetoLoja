import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="app-container">
      {/* Seu cabeçalho e navegação aqui */}
      <main>
        <Outlet /> {/* Aqui serão renderizados Produtos ou Carrinho */}
      </main>
    </div>
  )
}

export default App