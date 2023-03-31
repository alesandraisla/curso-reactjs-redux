import { useState } from "react";
import "./Mega.css";

export default function Mega(props) {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numero, setNumero] = useState(numerosIniciais);

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qt) {
    const numeros = Array(qt)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2); // ordem crescente

    return numeros;
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numero.join(" ")} </h3>
      <div>
        <label htmlFor="">Quantidade de números</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumero(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumero(gerarNumeros(qtde))}>
        Gerar números
      </button>
    </div>
  );
}
