import { useQuery } from "@tanstack/react-query";
import PecaApi from "../api/pecaApi";
import { defaultStale } from "../constants";

const pecaApi = new PecaApi();

const useComponentsByType = (tipo: string) => useQuery({
  queryKey: ["pecas"],
  queryFn: () => pecaApi.getParam("tipo", {
    params: {
      tipo: tipo,
    }
  }),
  staleTime: defaultStale,
});
export default useComponentsByType;