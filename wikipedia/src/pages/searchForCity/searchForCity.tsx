import React from "react";
import { Link } from "react-router-dom";
import styles from "./searchForCity.style";

function SearchForCity() {
  const classes = styles();

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
