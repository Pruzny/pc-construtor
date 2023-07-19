import { useMutation, useQueryClient } from "@tanstack/react-query";
import MontagemApi from "../api/montagemApi";

const montagemApi = new MontagemApi();

const useCreateBuild = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: montagemApi.create,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["montagens"],
      });
    }
  });
}
export default useCreateBuild;