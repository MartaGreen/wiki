import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./searchForCity.style";

import { getCityByString } from "../../requests/city.requests";

function SearchForCity() {
  const classes = styles();

  useEffect(() => {
    getCityByString("Самара");
  }, []);

  return (
    <main className={classes.main}>
      <form action="submit" className={classes.searchField}>
        <input
          type="text"
          placeholder="Введите город ..."
          className={classes.searchField__input}
        />
        <button className={classes.searchField__btn} />
      </form>

      <Link to="/" className={classes.link}>
        Назад на главную
      </Link>
    </main>
  );
}

export default SearchForCity;
