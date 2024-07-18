import { createSlice } from "@reduxjs/toolkit";

import eletronicosThumb from "../../assets/categorias/thumbnails/eletronicoss.png";
import eletronicosHeader from "../../assets/categorias/header/eletronicos.png";
import automotivoThumb from "../../assets/categorias/thumbnails/automotivos.png";
import automotivoHeader from "../../assets/categorias/header/automotivo.png";
import jogosThumb from "../../assets/categorias/thumbnails/jogoss.png";
import jogosHeader from "../../assets/categorias/header/jogos.png";
import escritorioThumb from "../../assets/categorias/thumbnails/escritorios.png";
import escritorioHeader from "../../assets/categorias/header/escritorio.png";
import somThumb from "../../assets/categorias/thumbnails/soms.png";
import somHeader from "../../assets/categorias/header/som.png";

const estadoInicial = [
  {
    nome: "Eletrônicos",
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: "eletronicos",
    descricao: "Os melhores e mais atuais eletrônicos estão aqui!",
  },
  {
    nome: "Automotivo",
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: "automotivos",
    descricao: "Encontre aqui equipamentos de carro.",
  },
  {
    nome: "Jogos",
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: "jogos",
    descricao: "Adquira console e jogos mais atuais do mercado!!",
  },
  {
    nome: "Escritório",
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: "escritorio",
    descricao: "Objetos para uso de escritório.",
  },
  {
    nome: "Som",
    thumbnail: somThumb,
    header: somHeader,
    id: "som",
    descricao: "Acessórios e aparelhos de som da melhor qualidade para você.",
  },
];

const categoriaSlice = createSlice({
  name: "categorias",
  initialState: estadoInicial,
});

export default categoriaSlice.reducer;
