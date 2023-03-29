import React from "react";

export default function Botoes(props) {
  return (
    <>
      <button onClick={props.incrementar}>+</button>
      <button onClick={props.decrementar}>-</button>
    </>
  );
}
