import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import { Aleatorio } from "./components/basicos/Aleatorio";

export default function App(props) {
  return (
    <>
      <ComParametro titulo="Situação do Aluno" aluno="Yuna" nota={9.3} />
      <Primeiro></Primeiro>
      <Aleatorio minimo={5} maximo={18} />
    </>
  );
}
