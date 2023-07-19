import Peca from "./Peca";
import Usuario from "./Usuario";

interface Montagem {
  id?: number;
  nome: string;
  usuario: Usuario;
  gabinete: Peca;
  fonte: Peca;
  placaMae: Peca;
  processador: Peca;
  placaDeVideo: Peca;
  armazenamento: Peca;
  memoriaRam: Peca;
  coolerProcessador?: Peca;
  coolerGabinete?: Peca;
}
export default Montagem;