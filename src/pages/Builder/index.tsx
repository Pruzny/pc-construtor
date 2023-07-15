import { Link, useParams } from "react-router-dom";
import "./styles.css";
import { componentInfos } from "../../constants";
import ComponentLabel from "../../components/ComponentLabel";
import ComponentCard from "../../components/ComponentCard";
import Peca from "../../models/Peca";
import { useState } from "react";
import useComponentsByType from "../../hooks/useComponentsByType";

const Builder = () => {
  const {
    tipo,
  } = useParams<{tipo: string}>();

  const type = tipo || "gabinete";
  console.log(tipo)

  const {
    data: result,
    isLoading,
    error,
  } = useComponentsByType(type);

  console.log(`Tipo: ${type}`)
  console.log(result?.data)

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  if (error || !result) {
    return <h2>Erro ao carregar os componentes</h2>
  }

  return (
    <>
      <div className="row p-5 rounded-3 text-center mb-4">
        <ul className="nav nav-tabs col-3 flex-column flex-wrap d-none d-md-block bg-secondary-subtle pe-0 rounded" id="componentsTab" role="tablist">
          {createLabels(type)}
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
          {createTabs(result.data, type)}
        </div>
      </div>
    </>
  );
}
export default Builder;


const createLabels = (type: string) => {
  const cards: JSX.Element[] = [];
  componentInfos.forEach((label, index) => {
    cards.push(<ComponentLabel key={`label-${index}`} name={label.name} raw={label.raw} isActive={label.raw === type}/>);
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

const createTabs = (elements: Peca[], type: string) => {

  const tabs: JSX.Element[] = [];
  componentInfos.forEach((label) => {
    tabs.push(
      <div className={`tab-pane fade show ${label.name === type ? "active" : ""}`} id={`${label.raw}Options`} role="tabpanel" aria-labelledby={`${label.raw}-tab`}>
          <div className="row">
            {createContent(elements)}
          </div>
      </div>
    );
  });
  return tabs;
}  