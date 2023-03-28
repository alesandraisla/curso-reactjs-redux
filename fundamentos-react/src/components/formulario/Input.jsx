import { useState } from "react";
import "./Input.css";

export default function Input() {
  const [valor, setValor] = useState("Inicial");
  //componente controlado só vai refletir quando o estado mudar
  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" value={valor} onChange={quandoMudar} />
        <input type="text" value={valor} readOnly />
      </div>
    </div>
  );
}
