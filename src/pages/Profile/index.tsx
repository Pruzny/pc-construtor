/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { componentInfos } from "../../constants";
import Montagem from "../../models/Montagem";
import useCreateBuild from "../../hooks/useCreateBuild";
import ComponentForm from "../../components/ComponentForm";
import { useParams } from "react-router-dom";
import Peca from "../../models/Peca";
import BuildTable from "../../components/BuildTable";
import useDeleteBuild from "../../hooks/useDeleteBuild";
import { useState } from "react";
import useBuildPage from "../../hooks/useBuildPage";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import "./styles.css"

const schema = z.object(
  Object.fromEntries(
    [
      ["name", z.string().min(1, { message: "O nome deve ser informado." })],
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
  const [page, setPage] = useState(0);
  const [buildName, setBuildName] = useState("");

  const {
    usuarioId = "",
  } = useParams<{usuarioId: string}>();

  const createBuild = useCreateBuild();

  const deleteBuild = useDeleteBuild();

  const handleDeleteBuild = (id: number) => {
    deleteBuild.mutate(id);
    setPage(0);
  }

  const handlePageChange = (page: number) => {
    setPage(page);
  }

  const handleNameChange = (name: string) => {
    setBuildName(name);
    setPage(0);
  }

  const {
    data: result,
    isLoading,
    error,
  } = useBuildPage({userId: parseInt(usuarioId), page: page, buildName: buildName, size: 3});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = ({
    name,
  }: FieldValues) => {
    console.log(selectedIds);
    const build: Montagem = {
      nome: name as string,
      usuario: {
        id: parseInt(usuarioId),
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
    reset();
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

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Ícone Carregando</span>
      </div>
    );
  }

  if (!result) {
    throw error;
  }

  return (
    <>
      <div className="toast position-fixed show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Sucesso!</strong>
          <small>
            Login
          </small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
        <div className="toast-body">
          Usuário {usuarioId} logado com sucesso!
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container d-flex flex-column justify-content-center p-5 bg-secondary-subtle rounded-3 mb-4 mt-4">
        <h2 className="mb-5">
          Nova montagem
        </h2>
        <div className="row col-8 align-self-center justify-content-around">
          <div className="form-outline col-12 bg-dark p-0 rounded mb-4">
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
          
          {createForms()}

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg col-12">
                Criar montagem
            </button>
          </div>
        </div>
      </form>

      <div className="m-4">
        <div className="border border-dark rounded-top p-4">
          <h3 className="text-start fw-bold">
            Pesquisar
          </h3>
          <SearchBar text={buildName} onChangeText={handleNameChange} />
        </div>
        <BuildTable builds={result.itens} onDeleteBuild={handleDeleteBuild} userId={usuarioId}/>
        <Pagination page={page} totalPages={result.totalDePaginas} onPageChange={handlePageChange} />
      </div>
    </>
  );
}
export default Profile;