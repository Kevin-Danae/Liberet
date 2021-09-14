import React, { createContext, useReducer } from "react";
import { catReducer } from './CatReducer';

export interface CatState {
  category: string;
  date: string;
}

export const catInicialState: CatState = {
  category: "beef",
  date: "11:00 - 12:00 am"
};

export interface CatContextProps {
  catState: CatState;
  category: (category: string) => void;
  date: (date: string) => void;
}

export const CatContext = createContext({} as CatContextProps);

export const CatProvider = ({ children }: any) => {
  const [catState, dispatch] = useReducer(catReducer, catInicialState);

  const category = (category: string) => {
    dispatch({ type: "category", payload: category });
  };

  const date = (date: string) => {
    dispatch({ type: "date", payload: date });
  };

  return (
    <CatContext.Provider
      value={{
        catState,
        category,
        date
      }}
    >
      {children}
    </CatContext.Provider>
  );
};
