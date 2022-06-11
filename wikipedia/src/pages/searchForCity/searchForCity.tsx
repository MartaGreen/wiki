import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./searchForCity.style";

import { getUserCity } from "../../requests/city.requests";

import SearchField from "../../components/searchFiled/searchField";
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
      <SearchField setSearchedString={setSearchedString} />

      <Article searchedString={searchedString} />

      <BackToMain />
    </main>
  );
}

export default SearchForCity;
