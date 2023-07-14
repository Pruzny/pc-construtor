import Peca from "../models/Peca";
import GenericApi from "./genericApi";

class PecaApi extends GenericApi<Peca> {
  constructor() {
    super("/pecas");
  }
}
export default PecaApi;