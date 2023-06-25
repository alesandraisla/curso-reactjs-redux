export const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

export function reducer(stateActual, action) {
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
