import { Link } from "react-router-dom";
import "./styles.css"

const Login = () => {
  return (
    <>
      <section className="vh-100 bg-image login-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" form="login-email">
                          Email
                        </label>
                        <input type="email" id="login-email" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="login-password">
                          Senha
                        </label>
                        <input type="password" id="login-password" className="form-control form-control-lg" />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button"className="btn btn-primary btn-lg">
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Não possui uma conta? <span> </span>
                        <Link to="/registrar" className="fw-bold text-body">
                          <u>
                            Clique para criar conta
                          </u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;