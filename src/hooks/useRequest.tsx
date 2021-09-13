import React, { useEffect, useState } from "react";
import { Meal, MealCard } from "../interfaces/Interfaces";

export const useRequest = () => {
  const [meal, setMeal] = useState<Meal[]>([]);
  const info: MealCard[] = [];

  const request = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
    );
    const data = await api.json();
    setMeal(data.meals);
  };

  useEffect(() => {
    request();
  }, []);

  return {
    meal,
  };
};
