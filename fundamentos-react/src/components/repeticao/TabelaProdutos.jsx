import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default function TabelaProdutos() {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.produto}</td>
          <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
}
