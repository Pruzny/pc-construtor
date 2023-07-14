import { ComponentInfo } from "../models/ComponentInfo";

export const defaultStale = 10_000;

export const componentInfos: ComponentInfo[] = [
  {
    name: "Gabinete",
    raw: "gabinete",
    isRequired: true,
    description: "É a carcaça que abriga todos os outros componentes do computador, fornecendo proteção e organização.",
    icon: "Gabinete.png",
  },
  {
    name: "Fonte",
    raw: "fonte",
    isRequired: true,
    description: "É a responsável por fornecer energia para todos os componentes do computador.",
    icon: "Fonte.png",
  },
  {
    name: "Placa Mãe",
    raw: "placa-mae",
    isRequired: true,
    description: "É a placa principal do computador, onde todos os outros componentes são conectados.",
    icon: "Placa-Mae.png",
  },
  {
    name: "Processador",
    raw: "cpu",
    isRequired: true,
    description: "É o cérebro do computador, responsável por processar todas as informações.",
    icon: "CPU.png",
  },
  {
    name: "Memória RAM",
    raw: "ram",
    isRequired: true,
    description: "É a memória de curto prazo do computador, onde os dados são armazenados enquanto estão sendo utilizados.",
    icon: "Memoria.png",
  },
  {
    name: "Armazenamento",
    raw: "armazenamento",
    isRequired: true,
    description: "É o depósito do computador, onde os dados são armazenados a longo prazo.",
    icon: "SSD.png",
  },
  {
    name: "Placa de Vídeo",
    raw: "gpu",
    isRequired: true,
    description: "É a responsável por processar as informações gráficas do computador.",
    icon: "GPU.png",
  },
  {
    name: "Cooler do Processador",
    raw: "cooler-cpu",
    isRequired: false,
    description: "É o responsável por manter o processador em uma temperatura adequada.",
    icon: "Cooler.png",
  },
  {
    name: "Cooler do Gabinete",
    raw: "fan",
    isRequired: false,
    description: "É o responsável por manter todo o gabinete em uma temperatura adequada.",
    icon: "Cooler.png",
  },
]