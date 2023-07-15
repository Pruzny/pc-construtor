import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div>
        <NavBar />
        <div className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1 d-flex align-items-center">
            <div className="container text-center">
              <h2 className="">Ocorreu um erro. Tente novamente ou retorne para a página inicial clicando
                <Link to="/">
                  <button className="btn btn-primary ms-2 fw-bold">
                    <h3>
                      aqui
                    </h3>
                  </button>
                </Link>
              </h2>
              <h4>
                <span className="fw-semibold">Origem do erro: </span>
                {isRouteErrorResponse(error)
                  ? "endereço de página inválido"
                  : error instanceof Error
                    ? error.message
                    : "erro desconhecido"}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ErrorPage;