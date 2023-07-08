import React, { ReactNode, useReducer, useEffect, createContext } from "react";
import { AppReducer } from "./AppReduce";
import GetCategorys from "../api-get/getCategory";
import GetStateProducts from "../api-get/getState";
import GetProducts from "../api-get/getProducts";

export const Context = createContext<any>(null);

const initialState = {
  products: [],
  categorys: [],
  states: [],
};
interface GlobalProviderProps {
  children: React.ReactNode;
}
export const GloblaProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchCategorys = async () => {
    try {
      const categorys = await GetCategorys();
      dispatch({
        type: "SET_CATEGORYS",
        payload: categorys,
      });
    } catch (error) {
      // Manejar el error
    }
  };

  const fetchStates = async () => {
    try {
      const states = await GetStateProducts();
      dispatch({
        type: "SET_STATES",
        payload: states,
      });
    } catch (error) {
      // Manejar el error
    }
  };
  const fetchProducts = async () => {
    try {
      const products = await GetProducts();
      dispatch({
        type: "SET_PRODUCTS",
        payload: products,
      });
    } catch (error) {
      // Manejar el error
    }
  };

  useEffect(() => {
    fetchCategorys();
    fetchStates();
    fetchProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        products: state.products,
        categorys: state.categorys,
        states: state.states,
      }}
    >
      {children}
    </Context.Provider>
  );
};
