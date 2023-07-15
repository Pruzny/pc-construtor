import { useParams } from "react-router-dom";
import "./styles.css";
import { componentInfos } from "../../constants";
import ComponentLabel from "../../components/ComponentLabel";
import ComponentCard from "../../components/ComponentCard";
import Peca from "../../models/Peca";
import { useEffect } from "react";
import useComponentsByType from "../../hooks/useComponentsByType";
import componentMenu from "../../components/ComponentMenu";

const Builder = () => {
  const {
    tipo = "",
  } = useParams<{tipo: string}>();

  const buttonLabel = componentInfos.find((item) => item.raw === tipo)?.name || "Tipo";

  const {
    data: result,
    isLoading,
    error,
  } = useComponentsByType(tipo);
  
  useEffect(() => {
    // Load components on init
  }, []);

  console.log(`Tipo: ${tipo}`)
  console.log(result?.data)

  const elements: Peca[] = result?.data || [];

  const createLabels = () => {
    const cards: JSX.Element[] = [];
    componentInfos.forEach((label, index) => {
      cards.push(<ComponentLabel key={`label-${index}`} name={label.name} raw={label.raw} isActive={label.raw === tipo}/>);
    });
    return cards
  }

  const createContent = () => {
    const content: JSX.Element[] = [];

    if (isLoading) {
      for (let i = 0; i < 3; i++) {
        content.push(<ComponentCard component={null}/>);
      }
    } else if (elements.length > 0) {
      elements.forEach((element) => {
        content.push(<ComponentCard component={element} />);
      });
    } else if (tipo === "") {
      content.push(
        <h2>
          Selecione um tipo de peça.
        </h2>
      );
    } else {
      content.push(
        <h2>
          Nenhuma peça desse tipo foi encontrada.
        </h2>
      );
    }
    
    return content;
  }

  if (error) {
    throw error;
  }

  return (
    <>
      <div className="row p-5 rounded-3 text-center mb-4">
        <ul className="nav nav-tabs col-3 flex-column flex-wrap d-none d-md-block bg-secondary-subtle pe-0 rounded" id="componentsTab" role="tablist">
          {createLabels()}
        </ul>

        <div className="collapse p-4 d-block d-md-none" id="menu">
            <div className="dropdown">
              <button className="dropdown-toggle btn btn-primary" data-bs-toggle="dropdown">
                {buttonLabel}
              </button>
              {componentMenu()}
            </div>
        </div>
        <div className="container ps-4 tab-content col-9" id="componentsTabContent">
          <div className="row">
            {createContent()}
          </div>
        </div>
      </div>
    </>
  );
}
export default Builder;