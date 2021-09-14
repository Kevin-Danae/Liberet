import React, { createContext, useReducer } from "react";
import { catReducer } from "./CatReducer";

export interface CatState {
  category: string;
  time: string;
  date: string;
}

export const catInicialState: CatState = {
  category: "beef",
  date: "Jue",
  time: "11:00 - 12:00 am",
};

export interface CatContextProps {
  catState: CatState;
  category: (category: string) => void;
  date: (date: string) => void;
  time: (time: string) => void;
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

  const time = (time: string) => {
    dispatch({ type: "time", payload: time });
  };
  return (
    <CatContext.Provider
      value={{
        catState,
        category,
        date,
        time,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};
