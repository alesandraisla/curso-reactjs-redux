import If, { Else } from "./if";

export function UsuarioIno(props) {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong> !
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo (a) <strong>!!!</strong>
      </If>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong> !
        <Else>
          Seja muito bem vindo <strong>Amigão</strong>
        </Else>
      </If>
    </div>
  );
}
