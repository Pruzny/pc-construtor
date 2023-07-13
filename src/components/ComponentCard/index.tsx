interface Props {
  name: string;
  isPlaceholder: boolean;
}

const ComponentCard = ({ name, isPlaceholder }: Props) => {
  return (
    <>
      <div className="card card-ph m-4 col-3" aria-hidden="true">
        <img src="" className="card-img-top" alt={`${isPlaceholder ? "Carregando..." : `Card de ${name}`}`} />
        <div className="card-body">
          <h5 className={`card-title ${isPlaceholder ? "placeholder-glow" : ""}`}>
            <span className={`${isPlaceholder ? "placeholder col-6" : ""}`}></span>
          </h5>
          <p className={`card-text ${isPlaceholder ? "placeholder-glow" : ""}`}>
            <span className={`${isPlaceholder ? "placeholder col-6" : ""}`}></span>
            <span className={`${isPlaceholder ? "placeholder col-3" : ""}`}></span>
            <span className={`${isPlaceholder ? "placeholder col-3" : ""}`}></span>
            <span className={`${isPlaceholder ? "placeholder col-5" : ""}`}></span>
            <span className={`${isPlaceholder ? "placeholder col-7" : ""}`}></span>
          </p>
          <a className={`btn btn-primary ${isPlaceholder ? "disabled placeholder col-6" : ""}`}></a>
        </div>
      </div>
    </>
  );
}
export default ComponentCard;