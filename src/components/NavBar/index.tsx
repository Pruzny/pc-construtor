import { Link } from "react-router-dom";
// import { imageIcon, navLink } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-top shadow-lg">
        <div className="container">
          <Link to="" className="navbar-brand">
            <img src="../../assets/logo.png" className="image-icon" alt="Logo do PC Construtor" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
            aria-expanded="false" aria-label="Botão do menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-dark p-4" id="menu">
            <div className="navbar-nav me-auto">
              <div className="dropdown">
                <a className="nav-link nav-item dropdown-toggle" data-bs-toggle="dropdown">
                  Componentes
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Gabinetes</a>
                  <a className="dropdown-item" href="#">Placas-Mãe</a>
                  <a className="dropdown-item" href="#">Processadores</a>
                  <a className="dropdown-item" href="#">Placas de Vídeo</a>
                </div>
              </div>
              <Link to="/montagem" className="nav-link nav-item">
                Montar PC
              </Link>
              <Link to="/guia" className="nav-link nav-item">
                Guias
              </Link>
              <a className="nav-link nav-item" href="#contato">
                Contato
              </a>
            </div>

            <div className="navbar-nav">
              <Link to="/login" className="nav-link nav-item">
                Meus PCs
                <span className="badge bg-danger rounded-circle translate-middle ms-1">1</span>
              </Link>
              <Link to="/login" className="nav-link nav-item">
                <FontAwesomeIcon icon={faRightToBracket} /> Entrar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;