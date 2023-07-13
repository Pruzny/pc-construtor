import { Link } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="modal-footer bg-dark p-4 bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-sm-4">
              <h5>Usuário</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/login" className="link">
                    Minha Conta
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="link">
                    Meus Dados
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-sm-4">
              <h5>Componentes</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/catalogo" className="link">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link to="/guia" className="link">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link to="/montagem" className="link">
                    Monte seu PC
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-sm-4" id="contato">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li> <FontAwesomeIcon icon={faUser} /> Maximilian Harrisson</li>
                <li> <FontAwesomeIcon icon={faPhone} /> (00) 987654321</li>
                <li> <FontAwesomeIcon icon={faEnvelope} /> <a className="link" href="mailto:maximilian@email.com"> maximilian@email.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;