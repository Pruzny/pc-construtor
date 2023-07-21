import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { componentInfos } from "../../constants";
import Montagem from "../../models/Montagem";
import "./styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import buildPrice from "../../util/buildPrice";

interface Props {
  builds: Montagem[];
  onDeleteBuild: (id: number) => void;
  userId: string;
}

const BuildTable = ({builds, onDeleteBuild, userId}: Props) => {
  const createLabels = () => {
    const content: JSX.Element[] = [];

    content.push(
      <th key="table-label-id" className="align-middle text-center">ID</th>
    );
    content.push(
      <th key="table-label-name" className="align-middle text-center">Nome</th>
    );
    content.push(
      <th key="table-label-name" className="align-middle text-center">Preço</th>
    );

    componentInfos.forEach((component) => {
      content.push(
        <th key={`table-label-${component.raw}`} scope="col" className="align-middle text-center">{component.name}</th>
      );
    });

    content.push(
      <th key="table-label-action" className="align-middle text-center">Ação</th>
    );

    return content;
  }

  return (
    <>
      <table className="table table-responsive table-bordered table-hover table-sm">
        <thead className="table-dark">
          <tr>
            <th colSpan={componentInfos.length + 4} className="text-center table-title">
              Montagens do usuário {userId}:
            </th>
          </tr>
          <tr>
            {createLabels()}
          </tr>
        </thead>
        <tbody>
          {builds.map((build) => {
            const price = buildPrice(build).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            });

            return (
              <tr key={`build-table-row-${build.id!}`}>
                <td width="7%" className="align-middle text-center fw-bold">{build.id}</td>
                <td width="15%" className="align-middle text-center fw-semibold">{build.nome}</td>
                <td width="11%" className="align-middle text-center text-success fw-semibold">R$ {price}</td>
                <td width="7%" className="align-middle text-center">{build.gabinete.nome}</td>
                <td width="7%" className="align-middle text-center">{build.fonte.nome}</td>
                <td width="7%" className="align-middle text-center">{build.placaMae.nome}</td>
                <td width="7%" className="align-middle text-center">{build.processador.nome}</td>
                <td width="7%" className="align-middle text-center">{build.memoriaRam.nome}</td>
                <td width="7%" className="align-middle text-center">{build.armazenamento.nome}</td>
                <td width="7%" className="align-middle text-center">{build.placaDeVideo.nome}</td>
                <td width="7%" className="align-middle text-center">{build.coolerProcessador ? build.coolerProcessador.nome : "-"}</td>
                <td width="7%" className="align-middle text-center">{build.coolerGabinete ? build.coolerGabinete.nome : "-"}</td>
                <td width="4%" className="align-middle text-center">
                  <button className="btn btn-danger w-100 h-100" onClick={() => onDeleteBuild(build.id!)} data-bs-toggle="tooltip" data-bs-placement="top" title="Excluir">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </>
  );
}
export default BuildTable;