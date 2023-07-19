import { componentInfos } from "../../constants";
import Montagem from "../../models/Montagem";
import "./styles.css";

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

      componentInfos.forEach((component) => {
        content.push(
          <th key={`table-label-${component.raw}`} scope="col">{component.name}</th>
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
            {/* Title cell that spans all columns */}
            <th colSpan={componentInfos.length + 3} className="text-center table-title">
              Montagens do usuário {userId}:
            </th>
          </tr>
          <tr>
            {createLabels()}
          </tr>
        </thead>
        <tbody>
          {builds.map((build) => {
            return (
              <tr key={`build-table-row-${build.id!}`}>
                <td width="7%" className="align-middle text-center fw-bold">{build.id}</td>
                <td width="20%" className="align-middle text-center fw-semibold">{build.nome}</td>
                <td width="7%" className="align-middle text-center">{build.gabinete.id}</td>
                <td width="7%" className="align-middle text-center">{build.fonte.id}</td>
                <td width="7%" className="align-middle text-center">{build.placaMae.id}</td>
                <td width="7%" className="align-middle text-center">{build.processador.id}</td>
                <td width="7%" className="align-middle text-center">{build.memoriaRam.id}</td>
                <td width="7%" className="align-middle text-center">{build.armazenamento.id}</td>
                <td width="7%" className="align-middle text-center">{build.placaDeVideo.id}</td>
                <td width="7%" className="align-middle text-center">{build.coolerProcessador ? build.coolerProcessador.id : "-"}</td>
                <td width="7%" className="align-middle text-center">{build.coolerGabinete ? build.coolerGabinete.id : "-"}</td>
                <td width="10%" className="align-middle text-center">
                  <button className="btn btn-danger w-100 h-100" onClick={() => onDeleteBuild(build.id!)}>Excluir</button>
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