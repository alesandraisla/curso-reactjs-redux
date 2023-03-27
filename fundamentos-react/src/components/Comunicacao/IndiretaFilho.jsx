export function IndiretaFilho(props) {
  const min = 50;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => props.quandoClicar("Yuna", gerarIdade(), gerarNerd)}
      >
        Fornecer Informações
      </button>
    </div>
  );
}
