import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(stateActual, action) {
  switch (action.type) {
    case "numberAdd2":
      return {
        ...stateActual,
        number: stateActual.number + 2,
      };
    case "login":
      return { ...stateActual, user: { name: action.payload } };
    case "numberMultiplicar7":
      return {
        ...stateActual,
        number: stateActual.number * 7,
      };
    case "dividir25":
      return {
        ...stateActual,
        number: stateActual.number / 25,
      };
    case "numberParseInt":
      return {
        ...stateActual,
        number: parseInt(stateActual.number),
      };
    case "numberAddN":
      return {
        ...stateActual,
        number: stateActual.number + action.payload,
      };
    default:
      return stateActual;
  }
}
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
