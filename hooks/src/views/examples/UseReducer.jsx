import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store/config";

// Criar uma ação pra multiplicar por 7
// dividir numero atual por 25
// ParseInt do numero e transformar pra inteiro
// Adicionar numero n (qualquer) somado flexivel numero adicionar n login valor

const UseReducer = (props) => {
  //No parametro precisa passar no parametro sempre a function que vai evluir e o estado inicial
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Yuna" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMultiplicar7" })}
          >
            Multiplicar por 7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "dividir25" })}
          >
            Dividir por 25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberParseInt" })}
          >
            Arredondar
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAddN", payload: -9 })}
          >
            -9
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
