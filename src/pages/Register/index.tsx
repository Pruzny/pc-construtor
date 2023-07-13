import { Link } from "react-router-dom";
import "./styles.css"

const Register = () => {
  return (
    <>
      <section className="vh-100 bg-image register-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Criar conta
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-email">
                          Email
                        </label>
                        <input type="email" id="signup-email" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-password">
                          Senha
                        </label>
                        <input type="password" id="signup-password" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-confirm-password">
                          Confirmar senha
                        </label>
                        <input type="password" id="signup-confirm-password" className="form-control form-control-lg" />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary btn-lg">
                          Criar conta
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Já possui uma conta?<span> </span>
                        <Link to="/login" className="fw-bold text-body">
                          <u>
                            Clique para fazer login
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
export default Register;