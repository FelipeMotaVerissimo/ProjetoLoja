import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaLogin.css'; // Importe o arquivo CSS específico

const TelaLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setError('');
    setSuccess('');

    // Validação básica
    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Por favor, preencha todos os campos');
        return;
      }
      
      // Simulação de login bem-sucedido
      setSuccess('Login realizado com sucesso!');
      
      // Armazenar estado de login
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirecionar para a página de produtos após login
      setTimeout(() => {
        navigate('/produtos');
      }, 1500);
      
    } else {
      // Validação para cadastro
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Por favor, preencha todos os campos');
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        setError('As senhas não coincidem');
        return;
      }
      
      if (formData.password.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres');
        return;
      }
      
      // Simulação de cadastro bem-sucedido
      setSuccess('Cadastro realizado com sucesso! Você será redirecionado para fazer login.');
      
      // Limpar formulário e mudar para tela de login
      setTimeout(() => {
        setIsLogin(true);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }, 1500);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="form-title">
          {isLogin ? 'Login' : 'Cadastro'}
        </h1>
        <p className="form-subtitle">
          {isLogin ? 'Acesse sua conta' : 'Crie sua nova conta'}
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        <div>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Digite seu nome"
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder={isLogin ? "Digite sua senha" : "Crie uma senha"}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="Confirme sua senha"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="submit-button"
          >
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={toggleForm}
            className="toggle-button"
          >
            {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;