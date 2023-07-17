
import Usuario from "../models/Usuario";
import GenericApi from "./genericApi";

class UsuarioApi extends GenericApi<Usuario> {
  constructor() {
    super("/usuarios");
  }
}
export default UsuarioApi;