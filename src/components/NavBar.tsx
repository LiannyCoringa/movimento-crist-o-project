import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link to="/" className="nav-link active">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/aboutUs" className="nav-link active">
            <li className="nav-item">Quem somos</li>
          </Link>
          <Link to="/message" className="nav-link active">
            <li className="nav-item">Mensagem do dia</li>
          </Link>
          <Link to="/schedule" className="nav-link active">
            <li className="nav-item">Agenda</li>
          </Link>
          <Link to="/comments" className="nav-link active">
            <li className="nav-item">Depoimentos</li>
          </Link>
          <Link to="/bible" className="nav-link active">
            <li className="nav-item">Bíblia Sagrada</li>
          </Link>
          <Link to="/musics" className="nav-link active">
            <li className="nav-item">Músicas</li>
          </Link>
          <Link to="/images" className="nav-link active">
            <li className="nav-item">Fotos</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
