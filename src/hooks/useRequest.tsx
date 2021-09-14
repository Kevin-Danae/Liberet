import React, { useContext, useEffect, useState } from "react";
import { Meal } from "../interfaces/Interfaces";
import { CatContext } from "../context/CatContext";

export const useRequest = () => {
  const [meal, setMeal] = useState<Meal[]>([]);
  const { catState } = useContext(CatContext);
  const request = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catState.category}`
    );
    const data = await api.json();
    setMeal(data.meals);
  };

  useEffect(() => {
    request();
  }, [catState]);

  return {
    meal,
  };
};
