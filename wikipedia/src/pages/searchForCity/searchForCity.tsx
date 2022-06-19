import React, { useEffect, useState } from "react";
import styles from "./searchForCity.style";

import { getUserCity } from "../../api/city.requests";

import SearchCity from "../../components/searchCity/searchCity";
import Article from "../../components/article/article";
import BackToMain from "../../components/backToMain/backToMain";

function SearchForCity() {
  const [searchedString, setSearchedString] = useState("");

  const classes = styles();

  useEffect(() => {
    (async function () {
      const city: string | null = await getUserCity();
      if (city) setSearchedString(city);
    })();
  }, []);

  return (
    <main className={classes.main}>
      <SearchCity cityNameChanged={setSearchedString} />

      <Article searchedString={searchedString} />

      <BackToMain />
    </main>
  );
}

export default SearchForCity;
