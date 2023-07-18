/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import "./styles.css"
import { z } from "zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUser from "../../hooks/useCreateUser";

const schema = z.object({
  name: z.string().min(1, { message: "O nome deve ser informado." }),
  email: z.string().min(1, { message: "O email deve ser informado." }).email({ message: "O email deve ser válido." }),
  password: z.string().min(1, { message: "A senha deve ser informada." }),
  confirmPassword: z.string().min(1, { message: "A senha deve ser confirmada." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas devem ser iguais.",
  path: ["confirmPassword"],
});
type FormData = z.infer<typeof schema>;

const Register = () => {
    const [userId, setUserId] = useState(0);

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const createUser = useCreateUser(setUserId);

    const onSubmit = ({ name, email, password }: FieldValues) => {
      setUserId(-1);
      reset();
      createUser.mutate({nome: name as string, email: email as string, senha: password as string});
    };

    const showResult = () => {
        if (userId > 0) {
          return (
            <>
              <h2>
                Usuário criado!
              </h2>
              <h3>
                {`ID do usuário: ${userId}`}
              </h3>
            </>
          );
        } else if (userId == -1) {
          return (
            <>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Ícone Carregando</span>
              </div>
            </>
          );
        } else if (userId == -2) {
          return (
            <>
              <h2>
                Email já registrado!
              </h2>
            </>
          );
        } else if (userId < 0) {
          return (
            <>
              <h2>
                Erro ao criar usuário!
              </h2>
            </>
          );
        }

        return <></>;
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-name">
                          Nome
                        </label>
                        <input
                          {...register("name")}
                          type="name"
                          id="signup-name"
                          className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">
                          {errors.name?.message}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-email">
                          Email
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          id="signup-email"
                          className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-password">
                          Senha
                        </label>
                        <input
                          {...register("password")}
                          type="password"
                          id="signup-password"
                          className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">
                          {errors.password?.message}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" form="signup-confirm-password">
                          Confirmar senha
                        </label>
                        <input
                          {...register("confirmPassword")}
                          type="password"
                          id="signup-confirm-password"
                          className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">
                          {errors.confirmPassword?.message}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg mb-4">
                          Criar conta
                        </button>
                      </div>

                      {showResult()}

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