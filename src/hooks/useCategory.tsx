import React, { useEffect, useState } from "react";
import { Category } from "../interfaces/Interfaces";

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const reqCat = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const res = await data.json();
    setCategory(res.categories);
  };

  useEffect(() => {
    reqCat()
  }, [])

  return {
      category
  }
};
