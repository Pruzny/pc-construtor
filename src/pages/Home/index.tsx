import PresentationCard from "../../components/PresentationCard";
import PresentationCarousel from "../../components/PresentationCarousel";
import { componentCards } from "../../constants";
// import "./styles.css"

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 bg-secondary-subtle rounded-3 d-block d-md-none text-center mt-4 mb-4">
          <div className="card bg-dark text-white">
            <img src="assets/img/background/pc-3.png" className="w-100" alt="Desenho de um Computador" />
            <div className="card-img-overlay">
              <h5 className="card-text">
                Site desenvolvido com a proposta de ajudar a montar o computador perfeito para você.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <PresentationCarousel />
      <div className="row mb-4">
        {createCards()}
      </div>
    </>
  );
}
export default Home;

const createCards = () => {
  const cards: JSX.Element[] = [];
  componentCards.forEach((card) => {
    cards.push(<PresentationCard name={card.name} isRequired={card.isRequired} description={card.description} icon={card.icon} />);
  });
  return cards;
}