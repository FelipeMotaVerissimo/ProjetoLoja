import { Outlet, Link, useLocation } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const location = useLocation();
  
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Painel</h2>
        <div className="menu-section">
          <h3>Ver Produtos</h3>
          <Link 
            to="/dashboard/produtos" 
            className={`menu-item ${location.pathname.includes('/produtos') && !location.pathname.includes('/novo') ? 'active' : ''}`}
          >
            Gerenciar Produtos
          </Link>
          <Link 
            to="/dashboard/produtos/novo" 
            className={`menu-item ${location.pathname.includes('/novo') ? 'active' : ''}`}
          >
            Criar Produto
          </Link>
        </div>
      </nav>
      <main className="conteudo">
        <Outlet />
      </main>
    </div>
  );
}