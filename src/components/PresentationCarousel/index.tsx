import "./styles.css"

const PresentationCarousel = () => {
  return (
    <div id="id-carousel" className="carousel slide d-none d-md-block mb-4" data-bs-ride="carousel" data-bs-interval="3000">
      <ol className="carousel-indicators">
        <li data-bs-target="#id-carousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#id-carousel" data-bs-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../assets/img/background/pc-1.png" className="d-block w-100" alt="Foto de um Computador" />
          <div className="carousel-caption">
            <div className="text-center">
              <span className="text-1">As melhores peças para você escolher e montar o seu computador ideal.</span><br />
              <span className="text-2">Venha montar você também!</span>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../assets/img/background/pc-2.png" className="d-block w-100" alt="Desenho de um Computador" />
          <div className="carousel-caption">
            <div className="text-center">
              <span className="text-1">Escolha componentes desde os mais simples até os de última geração.</span><br />
              <span className="text-2">Catálogo de peças para orçamentos variados!</span><br />
            </div>
          </div>
        </div>
      </div>
      <a href="#id-carousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <span className="sr-only">Anterior</span>
        </span>
      </a>
      <a href="#id-carousel" className="carousel-control-next" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true">
          <span className="sr-only">Próximo</span>
        </span>
      </a>
    </div>
  );
}
export default PresentationCarousel;