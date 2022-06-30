import React, { useEffect, useState } from "react";
import styles from "./city.styles";

import { getUserCity } from "../../api/city.api";

import SearchCity from "../../components/searchCity/searchCity";
import Article from "../../components/article/article";
import Header from "../../components/header/header";

function City() {
  const [cityName, setCityName] = useState("");

  const classes = styles();

  useEffect(() => {
    const userCity = async (): Promise<void> => {
      const city: string | null = await getUserCity();
      if (city) setCityName(city);
    };

    userCity();
  }, []);

  return (
    <div>
      <Header />
      <main className={classes.main}>
        <SearchCity onCityNameChanged={setCityName} />

        <Article cityName={cityName} />
      </main>
    </div>
  );
}

export default City;
