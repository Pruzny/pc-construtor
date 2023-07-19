/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { componentInfos } from "../../constants";
import Montagem from "../../models/Montagem";
import useCreateBuild from "../../hooks/useCreateBuild";
import ComponentForm from "../../components/ComponentForm";
import { redirect } from "react-router-dom";
import Peca from "../../models/Peca";

const schema = z.object(
  Object.fromEntries(
    [
      ["name", z.string().min(1, { message: "O nome deve ser informado." })],
      ["user", z.string().min(1, { message: "O usuário deve ser informado." })],
      ...componentInfos.map((component) => [
        component.raw,
        component.isRequired
          ? z.string().min(0, {message: "Exigido"}).refine(() => selectedIds[component.raw] !== "", { message: `A peça ${component.name.toLowerCase()} deve ser informada.` })
          : z.string().optional(),
      ]),
    ]
  )
);
type FormData = z.infer<typeof schema>;

const selectedIds: Record<string, string> = {};

const pseudoComponent = (id: number): Peca => {
  return {
    id: id,
    nome: "",
    marca: "",
    preco: 0,
    tipo: "",
    descricao: "",
    imagem: "",
  }
}

componentInfos.forEach((component) => {
  selectedIds[component.raw] = "";
})


const Profile = () => {
  const createBuild = useCreateBuild();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = ({
    name,
    user,
  }: FieldValues) => {
    console.log(selectedIds);
    const build: Montagem = {
      nome: name as string,
      usuario: {
        id: parseInt(user as string),
        nome: "",
        email: "",
        senha: "",
      },
      gabinete: pseudoComponent(parseInt(selectedIds["gabinete"])),
      fonte: pseudoComponent(parseInt(selectedIds["fonte"])),
      placaMae: pseudoComponent(parseInt(selectedIds["placa-mae"])),
      processador: pseudoComponent(parseInt(selectedIds["cpu"])),
      memoriaRam: pseudoComponent(parseInt(selectedIds["ram"])),
      armazenamento: pseudoComponent(parseInt(selectedIds["armazenamento"])),
      placaDeVideo: pseudoComponent(parseInt(selectedIds["gpu"])),
      coolerProcessador: selectedIds["cooler-cpu"] === "" ? undefined : pseudoComponent(parseInt(selectedIds["cooler-cpu"])),
      coolerGabinete: selectedIds["fan"] === "" ? undefined : pseudoComponent(parseInt(selectedIds["fan"])),
    }
    // reset();
    createBuild.mutate(build);
    console.log(build);
  }

  const createForms = () => {
    const forms: JSX.Element[] = [];
    componentInfos.forEach((component) => {
      forms.push(<ComponentForm key={`component-form-${component.raw}`} idList={selectedIds} registerArgs={register(component.raw)} error={errors[component.raw]} info={component} />)
    });
    return forms;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container d-flex flex-column justify-content-center p-5 bg-secondary-subtle rounded-3 mb-4 mt-4">
        <div className="row col-8 align-self-center justify-content-around">
          <div className="form-outline col-12 col-md-6 col-xl-7 bg-dark p-0 rounded mb-4">
            <label className="form-label fw-bold text-white bg-dark bg-gradient rounded p-2 w-100" form="build-name">
              Nome da montagem:
            </label>
            <div className={`m-2 ${errors["user"] ? "is-invalid" : ""}`}>
              <input
                {...register("name")}
                type="text"
                id="build-name"
                className="form-control fw-semibold"
              />
            </div>
            <div className="invalid-feedback p-2 pt-0">
              {errors["name"]?.message as string}
            </div>
          </div>

          <div className="form-outline col-12 col-md-5 col-xl-4 bg-dark p-0 rounded mb-4">
            <label className="form-label fw-bold text-white bg-dark bg-gradient rounded p-2 w-100" form="build-user">
              ID do usuário montador:
            </label>
            <div className={`m-2 ${errors["user"] ? "is-invalid" : ""}`}>
              <input
                {...register("user")}
                type="number"
                id="build-user"
                className="form-control fw-semibold"
              />
            </div>
            <div className="invalid-feedback p-2 pt-0">
              {errors["user"]?.message as string}
            </div>
          </div>
          
          {createForms()}

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg col-12">
                Criar montagem
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Profile;