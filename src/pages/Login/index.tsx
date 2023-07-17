/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import "./styles.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const schema = z.object({
  email: z.string().min(1, { message: "O email deve ser informado." }),
  password: z.string().min(1, { message: "A senha deve ser informada." }),
});
type FormData = z.infer<typeof schema>;

const Login = () => {
  const [hasQuery, setHasQuery] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = ({ email, password }: FieldValues) => {
    setUserEmail(email as string);
    setUserPassword(password as string);
    setHasQuery(true);
    reset({ password: "" });
  };

  const { data: result, isLoading } = useUser({email: userEmail, senha: userPassword});

  const getUser = () => {
    if (!hasQuery) {
      return <></>;
    } else if (isLoading) {
      return <h2>Carregando...</h2>;
    } else if (!result?.data || result?.data.length === 0) {
      return <h2>Usuário inválido!</h2>;
    } else {
      return <h2>{`ID do usuário: ${result.data[0].id!}`}</h2>;
    }
  };

  return (
    <>
      <section className="vh-100 bg-image login-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-outline mb-4">
                        <label className="form-label" form="login-email">
                          Email
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          id="login-email"
                          className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="login-password">
                          Senha
                        </label>
                        <input
                          {...register("password")}
                          type="password"
                          id="login-password"
                          className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">
                          {errors.password?.message}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg mb-4">
                          Login
                        </button>
                      </div>
                    </form>

                    {getUser()}

                    <p className="text-center text-muted mt-5 mb-0">
                      Não possui uma conta? <span> </span>
                      <Link to="/registrar" className="fw-bold text-body">
                        <u>Clique para criar conta</u>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
