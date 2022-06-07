import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
const LoaderContext = createContext(null);
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";
const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, visibility: true };
    case HIDE_LOADER:
      return { ...state, visibility: false };
    default:
      return state;
  }
};

const LoaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { visibility: false });
  const show = () => dispatch({ type: SHOW_LOADER });
  const hide = () => dispatch({ type: HIDE_LOADER });
  return (
    <LoaderContext.Provider
      value={{ visibility: state.visibility, show, hide }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
export const useLoader = () => useContext(LoaderContext);
export default LoaderProvider;
