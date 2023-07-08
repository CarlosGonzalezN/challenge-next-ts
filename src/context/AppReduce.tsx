//Usando la funciones declaradas en el GlobaState aca se decide que funcion ejecuta
export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CATEGORYS":
      return {
        ...state,
        categorys: action.payload,
      };
    case "SET_STATES":
      return {
        ...state,
        states: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
