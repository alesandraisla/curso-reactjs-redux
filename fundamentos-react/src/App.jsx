import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import { Aleatorio } from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";

export default function App(props) {
  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
          <Card titulo="#1 Primeiro componente">
            <Primeiro></Primeiro>
          </Card>
          <Card titulo="#2 Com Parâmetro">
            <ComParametro titulo="Situação do Aluno" aluno="Yuna" nota={9.3} />
          </Card>
          <Card titulo="#3 Exemplo de card">
            <Aleatorio minimo={5} maximo={18} />
          </Card>
        </div>
      </div>
    </>
  );
}
