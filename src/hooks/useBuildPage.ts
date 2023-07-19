import { useQuery } from "@tanstack/react-query";
import MontagemApi from "../api/montagemApi";
import { defaultStale } from "../constants";

const montagemApi = new MontagemApi();

interface Props {
  userId: number;
  buildName: string;
  page: number;
  size: number;
}

const useBuildPage = ({ userId, buildName, page, size }: Props) => useQuery({
  queryKey: ["montagens", "paginacao", userId, buildName, page, size],
  queryFn: () => montagemApi.getPage({
    params: {
      pagina: page,
      tamanho: size,
      nome: buildName,
      usuarioId: userId,
    }
  }),
  staleTime: defaultStale,
  keepPreviousData: true,
});
export default useBuildPage;