import React, { useEffect, useState } from "react";

export const useSubRequest = (id: string) => {
  const [info, setInfo] = useState({
    strArea: 'wait', 
    strTags: 'wait',
  });

  const subReq = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const res = await data.json();
    setInfo({
      strArea: res.meals[0].strArea,
      strTags: res.meals[0].strTags,
    });
  };

  useEffect(() => {
      subReq();
  }, [info])

  return { info };
};
