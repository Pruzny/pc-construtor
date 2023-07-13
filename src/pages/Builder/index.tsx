import { Link } from "react-router-dom";
import "./styles.css";
import { componentInfos } from "../../constants";
import ComponentLabel from "../../components/ComponentLabel";
import ComponentCard from "../../components/ComponentCard";

const starterTab = 0;

const Builder = () => {
  return (
    <>
      <div className="row p-5 rounded-3 text-center mb-4">
        <ul className="nav nav-tabs col-3 flex-column flex-wrap d-none d-md-block bg-secondary-subtle pe-0 rounded" id="componentsTab" role="tablist">
          {createLabels()}
        </ul>

        <div className="collapse p-4 d-block d-md-none" id="menu">
            <div className="dropdown">
              <a className="dropdown-toggle" data-bs-toggle="dropdown">
                Componentes
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Gabinetes</a>
                <a className="dropdown-item" href="#">Placas-Mãe</a>
                <a className="dropdown-item" href="#">Processadores</a>
                <a className="dropdown-item" href="#">Placas de Vídeo</a>
              </div>
            </div>
        </div>
        <div className="container tab-content col-8" id="componentsTabContent">
          {createTabs()}
        </div>
      </div>
    </>
  );
}
export default Builder;

const createLabels = () => {
  const cards: JSX.Element[] = [];
  componentInfos.forEach((label, index) => {
    cards.push(<ComponentLabel name={label.name} raw={label.raw} isActive={index === starterTab} />);
  });
  return cards
}

const createContent = () => {
  const content: JSX.Element[] = [];

  // TODO Placeholder
  for (let i = 0; i < 3; i++) {
    content.push(<ComponentCard name={""} isPlaceholder={true} />);
  }
  return content;
}

const createTabs = () => {
  const tabs: JSX.Element[] = [];
  componentInfos.forEach((label, index) => {
    tabs.push(
      <div className={`tab-pane fade show ${index === starterTab ? "active" : ""}`} id={`${label.raw}Options`} role="tabpanel" aria-labelledby={`${label.raw}-tab`}>
          <div className="row">
            {createContent()}
          </div>
      </div>
    );
  });
  return tabs;
}
