import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="app-layout">
      {/* Menu Lateral Fixo - só aparece quando logado */}
      {isLoggedIn && (
        <div className="sidebar">
          <h2>Painel</h2>
          <nav>
            <ul>
              <li>
                <Link 
                  to="/produtos" 
                  className={location.pathname === '/produtos' ? 'active' : ''}
                >
                  Ver Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/produtos" 
                  className={location.pathname.includes('/dashboard/produtos') ? 'active' : ''}
                >
                  Gerenciar Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/criar" 
                  className={location.pathname.includes('/dashboard/criar') ? 'active' : ''}
                >
                  Criar Produto
                </Link>
              </li>
              {/* Botão de Logout */}
              <li>
                <button 
                  onClick={handleLogout}
                  className="logout-button"
                >
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Área de Conteúdo */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}