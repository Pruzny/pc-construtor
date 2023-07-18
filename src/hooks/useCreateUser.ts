import { useMutation, useQueryClient } from "@tanstack/react-query";
import UsuarioApi from "../api/usuarioApi";
import { AxiosError } from "axios";

const usuarioApi = new UsuarioApi();

const useCreateUser = (setId: (id: number) => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usuarioApi.create,
    onSuccess: (usuario) => {
      void queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
      setId(usuario.data.id!);
    },
    onError: (error: AxiosError) => {
      if (error.response && error.response.status === 409) {
        setId(-2);
      } else {
        setId(-3);
      }
    },
  });
}
export default useCreateUser;