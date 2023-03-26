import alunos from "../../data/alunos";

export default function ListaAlunos() {
  const listaCompleta = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} {"->"} {aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{listaCompleta}</ul>
    </div>
  );
}
