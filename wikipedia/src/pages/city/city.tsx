import React, { useEffect, useState } from "react";
import styles from "./city.styles";

import { getUserCity } from "../../api/city.requests";

import SearchCity from "../../components/searchCity/searchCity";
import Article from "../../components/article/article";
import BackToMain from "../../components/backToMain/backToMain";

function City() {
  const [cityName, setCityName] = useState("");

  const classes = styles();

  useEffect(() => {
    (async function () {
      const city: string | null = await getUserCity();
      if (city) setCityName(city);
    })();
  }, []);

  return (
    <main className={classes.main}>
      <SearchCity onCityNameChanged={setCityName} />

      <Article cityName={cityName} />

      <BackToMain />
    </main>
  );
}

export default City;
