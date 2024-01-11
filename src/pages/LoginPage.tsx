import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function LoginPage() {
  const [disabledState, setDisabled] = useState(true);
  const [user, setUser] = useState({ user: '', password: '' });

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, user: e.target.value });
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
    if (e.target.value.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <form className="mb-3">
          <label htmlFor="user" className="form-label">Usuário</label>
          <input
            id="user"
            type="text"
            className="form-control"
            placeholder="Digite seu usuário"
            onChange={ handleChangeUser }
          />
          <label htmlFor="password" className="form-label">Senha</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Digite sua senha"
            onChange={ handleChangePassword }
          />
          <p id="passwordHelpBlock" className="form-text">
            Sua senha deve ter 8 caracteres.
          </p>
          <button
            className="btn btn-outline-primary"
            disabled={ disabledState }
          >
            Entrar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
