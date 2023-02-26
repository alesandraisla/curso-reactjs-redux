import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Primeiro />
    <ComParametro titulo="Situação do Aluno" aluno="Lara" nota={9.2} />
    <ComParametro titulo="Situação do Aluno" aluno="Tidus" nota={5.7} />
  </div>
);
