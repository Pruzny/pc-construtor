import { useQuery } from "@tanstack/react-query";
import PecaApi from "../api/pecaApi";
import { defaultStale } from "../constants";

const pecaApi = new PecaApi();

const useComponents = () => useQuery({
  queryKey: ["pecas"],
  queryFn: () => pecaApi.getAll(),
  staleTime: defaultStale,
});
export default useComponents;