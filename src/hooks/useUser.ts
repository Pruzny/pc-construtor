import { useQuery } from "@tanstack/react-query";
import UsuarioApi from "../api/usuarioApi";
import { defaultStale } from "../constants";

const usuarioApi = new UsuarioApi();

interface Props {
  email: string;
  senha: string;
}

const useUser = ({email, senha}: Props) => 
  useQuery({
    queryKey: ["usuarios", "login", email, senha],
    queryFn: () => usuarioApi.getParam("login", {
      params: {
        email: email,
        senha: senha,
      },
    }),
    staleTime: defaultStale,
    keepPreviousData: true,
  })
export default useUser;