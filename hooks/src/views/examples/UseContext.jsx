import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
  const context = useContext(DataContext);

  //   Replica todos os atributos e sobrescreve apenas o number
  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

  const { number, text, setNumber, setText } = useContext(AppContext);

  useEffect(() => {
    if (number > 1250) {
      setText("Número máximo");
    }
  }, [number, setText]);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <div className="center">
        <span className="text">{context.state.text} </span>
        <span className="text">{context.state.number} </span>
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
        </div>
      </div>
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
