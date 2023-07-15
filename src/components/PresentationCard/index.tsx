import { Link } from "react-router-dom";
import "./styles.css"
import { ComponentInfo } from "../../models/ComponentInfo";

const PresentationCard = ({name, raw, isRequired, description, icon}: ComponentInfo) => {
  console.log(`assets/img/icons/${icon.replace(" ", "")}.png`)
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card mb-4 h-100">
          <img src={`assets/img/icons/${icon.replace(" ", "")}`} alt={`Ícone ${name}`} className="card-img" />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{name}</h5>
              <p className={`${isRequired ? "text-danger" : "text-info"} fw-bold`}>{isRequired ? "Obrigatório" : "Opcional"}</p>
            </div>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer text-end">
            <Link className="btn btn-outline-primary" to={`montagem/${raw}`}>Buscar produtos</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default PresentationCard;