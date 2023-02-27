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
          <Card titulo="#1 Primeiro componente" color="#011f4b  ">
            <Primeiro></Primeiro>
          </Card>
          <Card titulo="#2 Com Parâmetro" color="#03396c  ">
            <ComParametro titulo="Situação do Aluno" aluno="Yuna" nota={9.3} />
          </Card>
          <Card titulo="#3 Exemplo de card" color="#005b96 ">
            <Aleatorio minimo={5} maximo={18} />
          </Card>
        </div>
      </div>
    </>
  );
}
