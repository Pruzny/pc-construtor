import "./styles.css"

interface Props {
  name: string;
  isRequired: boolean;
  description: string;
  icon: string;
}

const PresentationCard = ({name, isRequired, description, icon}: Props) => {
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
            <button className="btn btn-outline-primary">Buscar produtos</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PresentationCard;