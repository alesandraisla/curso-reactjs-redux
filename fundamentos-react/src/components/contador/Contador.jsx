/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import Botoes from "./Botoes";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";

export default class Contador extends Component {
  //Coloca todos os atributos do contador
  //aponta pra instancia atual this

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     numero: this.props.numeroInicial,
  //   };
  // }

  //Para o this funcionar a forma correta é sempre transformar a function em function arrow

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: +novoPasso.target.value,
    });
  };

  render() {
    return (
      <div className="Contador">
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes incrementar={this.inc} decrementar={this.dec} />
      </div>
    );
  }
}
