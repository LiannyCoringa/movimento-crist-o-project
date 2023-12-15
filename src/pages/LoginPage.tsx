import Footer from '../components/Footer';
import Header from '../components/Header';

function LoginPage() {
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
          />
          <label htmlFor="password" className="form-label">Senha</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Digite sua senha"
          />
          <p id="passwordHelpBlock" className="form-text">
            Sua senha deve ter 8 caracteres.
          </p>
          <button className="btn btn-outline-primary">Entrar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
