import Montagem from "../models/Montagem";

const buildPrice = (montagem: Montagem) => {
  let price = 0;

  price += montagem.gabinete.preco;
  price += montagem.fonte.preco;
  price += montagem.placaMae.preco;
  price += montagem.processador.preco;
  price += montagem.placaDeVideo.preco;
  price += montagem.armazenamento.preco;
  price += montagem.memoriaRam.preco;

  if (montagem.coolerProcessador) {
    price += montagem.coolerProcessador.preco;
  }

  if (montagem.coolerGabinete) {
    price += montagem.coolerGabinete.preco;
  }

  return price;
}
export default buildPrice;