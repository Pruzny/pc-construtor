import Peca from "../../models/Peca";
import "./styles.css"

interface Props {
  component: Peca | null;
}

const ComponentCard = ({component}: Props) => {
  if (component === null) {
    return (
      <>
        <div className="card card-ph m-4 col-3" aria-hidden="true">
          <img src="" className="card-img-top" alt="Carregando..."/>
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-6"></span>
              <span className="placeholder col-3"></span>
              <span className="placeholder col-3"></span>
              <span className="placeholder col-5"></span>
              <span className="placeholder col-7"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="card card-ph m-2 col-5 col-lg-5 col-xl-3 component-card" aria-hidden="true">
        <div className="card-img-container">
          <img src={component.imagem} className="card-img-to" alt={`Foto de de ${component.nome}`} />
        </div>
        <div className="card-body d-flex flex-column">
          <h4 className="card-title fw-bold">
            <span className="col-6">
              {component.nome.toUpperCase()}
            </span>
          </h4>
          <div className="flex-grow-1">
            <span className="card-text">
              <h5 className="text-center fw-semibold mb-4">
                {component.marca.toUpperCase()}
              </h5>
              <h4 className="text-success text-center mb-4 fw-semibold">
                {component.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
              </h4>
              <p className="text-center">
                {component.descricao}
              </p>
            </span>
          </div>
          <div className="d-flex align-items-end">
            <a className="btn btn-primary col-12">
              Adicionar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ComponentCard;