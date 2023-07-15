import { useQuery } from "@tanstack/react-query";
import PecaApi from "../api/pecaApi";
import { defaultStale } from "../constants";

const pecaApi = new PecaApi();

const useComponentsByType = (tipo: string) => useQuery(["pecas", tipo], () =>
  pecaApi.getParam("tipo", {
    params: {
      tipo: tipo,
    },
  }),
  { staleTime: defaultStale }
);
export default useComponentsByType;