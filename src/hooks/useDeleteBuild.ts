import { useMutation, useQueryClient } from "@tanstack/react-query";
import MontagemApi from "../api/montagemApi";

const montagemApi = new MontagemApi();

const useDeleteBuild = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: montagemApi.delete,
    onSuccess: () => {
      void queryclient.invalidateQueries({
        queryKey: ["montagens"],
      });
    }
  });
}
export default useDeleteBuild;