import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({page, totalPages, onPageChange}: Props) => {
  const createButtons = () => {
    const content: JSX.Element[] = [];

    for (let i = 0; i < totalPages; i++) {
      content.push(
        <li key={`pagination-button-${i}`} className={`page-item ${page === i ? "active" : ""}`}>
          <button className="page-link" onClick={() => onPageChange(i)}>
            {i + 1}
          </button>
        </li>
      );
    }

    return content;
  }

  if (totalPages < 1) {
    return <></>;
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(page - 1)} data-bs-toggle="tooltip" data-bs-placement="top" title="Anterior">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </li>
          {createButtons()}
          <li className={`page-item ${page === totalPages - 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(page + 1)} data-bs-toggle="tooltip" data-bs-placement="top" title="Próxima">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Pagination;