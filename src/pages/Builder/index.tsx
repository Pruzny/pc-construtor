import { Link } from "react-router-dom";
import "./styles.css";
import { componentInfos } from "../../constants";
import ComponentLabel from "../../components/ComponentLabel";
import ComponentCard from "../../components/ComponentCard";
import useComponents from "../../hooks/useComponents";
import Peca from "../../models/Peca";

const starterTab = 0;

const Builder = () => {
  const {
    data: result,
    isLoading,
    error,
  } = useComponents();

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  if (error || !result) {
    throw error;
  }

  const components = result.data;

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
        <div className="container ps-4 tab-content col-9" id="componentsTabContent">
          {createTabs(components)}
        </div>
      </div>
    </>
  );
}
export default Builder;

const createLabels = () => {
  const cards: JSX.Element[] = [];
  componentInfos.forEach((label, index) => {
    cards.push(<ComponentLabel key={`label-${index}`} name={label.name} raw={label.raw} isActive={index === starterTab} />);
  });
  return cards
}

const createContent = (elements: Peca[]) => {
  const content: JSX.Element[] = [];

  if (elements.length > 0) {
    elements.forEach((element) => {
      content.push(<ComponentCard component={element} />);
    });
  } else {
    for (let i = 0; i < 3; i++) {
      content.push(<ComponentCard component={null}/>);
    }
  }
  
  return content;
}

const createTabs = (elements: Peca[]) => {

  const tabs: JSX.Element[] = [];
  componentInfos.forEach((label, index) => {
    tabs.push(
      <div className={`tab-pane fade show ${index === starterTab ? "active" : ""}`} id={`${label.raw}Options`} role="tabpanel" aria-labelledby={`${label.raw}-tab`}>
          <div className="row">
            {createContent(elements)}
          </div>
      </div>
    );
  });
  return tabs;
}
