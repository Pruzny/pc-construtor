import Montagem from "../models/Montagem";
import GenericApi from "./genericApi";

class MontagemApi extends GenericApi<Montagem> {
  constructor() {
    super("/montagens");
  }
}
export default MontagemApi;