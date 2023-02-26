export function Aleatorio(props) {
  // const min = props.minimo;
  // const max = props.maximo;
  const { minimo, maximo } = props;

  const sorteio = parseInt(Math.random() * (maximo - minimo + 1)) + minimo;

  return (
    <>
      <h2>Valor Aleatório </h2>
      <div>Valor mínimo: {props.minimo}</div>
      <div>Valor máximo: {props.maximo}</div>
      <div>Sorteio {sorteio}</div>
    </>
  );
}
