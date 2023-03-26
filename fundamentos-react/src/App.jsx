import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import { Aleatorio } from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import { ParOuImpar } from "./components/Condicional/ParOuImpar";
import { UsuarioIno } from "./components/Condicional/UsuarioInfo";

export default function App(props) {
  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
          <Card titulo="#1 Primeiro componente" color="#011f4b  ">
            <Primeiro></Primeiro>
          </Card>
          <Card titulo="#2 Com Parâmetro" color="#ff8b94  ">
            <ComParametro titulo="Situação do Aluno" aluno="Yuna" nota={9.3} />
          </Card>
          <Card titulo="#3 Exemplo de card" color="#008744  ">
            <Aleatorio minimo={5} maximo={18} />
          </Card>
          <Card titulo="#4 Componente com filhos - Familia" color="#f37735">
            <Familia sobrenome="Ferreira">
              <FamiliaMembro nome="Julia" />
              <FamiliaMembro nome="Alice" />
              <FamiliaMembro nome="Bryan" />
            </Familia>
          </Card>
          <Card titulo="#5 Repetição alunos" color="#557515">
            <ListaAlunos />
          </Card>
          <Card titulo="#6 Atividade - Repetição produtos" color="#92ff">
            <TabelaProdutos />
          </Card>
          <Card
            titulo="#7 Atividade - Renderização par ou ímpar"
            color="#007595"
          >
            <ParOuImpar numero={20} />
            <UsuarioIno usuario={{ nome: "Suzany" }} />
            <UsuarioIno usuario={{ email: "su@gmail.com" }} />
          </Card>
        </div>
      </div>
    </>
  );
}
