import { useQuery } from "@tanstack/react-query";
import MontagemApi from "../api/montagemApi";
import { defaultStale } from "../constants";

const montagemApi = new MontagemApi();

const useBuilds = () => useQuery({
  queryKey: ["montagens"],
  queryFn: () => montagemApi.getAll(),
  staleTime: defaultStale,
});
export default useBuilds;