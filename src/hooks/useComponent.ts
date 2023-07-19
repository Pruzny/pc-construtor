import { useQuery } from "@tanstack/react-query";
import { defaultStale } from "../constants";
import PecaApi from "../api/pecaApi";

const pecaApi = new PecaApi();

const useComponent = (id: number) => 
  useQuery({
    queryKey: [id],
    queryFn: () => pecaApi.get(id),
    staleTime: defaultStale,
  })
export default useComponent;