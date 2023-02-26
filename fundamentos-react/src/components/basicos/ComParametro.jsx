export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInteira = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno}</strong> tem nota <strong>{props.nota}</strong>
        <strong>Nota inteira {notaInteira}</strong>
      </p>
      <p>Status {status}</p>
    </div>
  );
}
