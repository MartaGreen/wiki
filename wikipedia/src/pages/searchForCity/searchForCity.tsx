import React, { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./searchForCity.style";

import { getCityByString } from "../../requests/city.requests";
import {
  ICityRequest,
  IPageInfo,
  IPage,
} from "../../interfaces/cityRequest.interface";

function SearchForCity() {
  const [content, setContent] = useState({} as IPageInfo);

  const classes = styles();

  useEffect(() => {
    (async function () {
      const cityRequestData: ICityRequest | null = await getCityByString(
        "Москва"
      );
      if (!cityRequestData) return;
      const page: IPage = cityRequestData.query.pages;
      const pageId: number = Number(Object.keys(page)[0]);
      const pageInfo: IPageInfo = page[pageId];
      setContent((state) => (state = pageInfo));
    })();
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

      <section className={classes.article}>
        <h2 className={classes.article__title}>{content.title}</h2>
        {content.extract
          ? content.extract.split("\n").map((content, index) => {
              return <p key={index}>{content}</p>;
            })
          : ""}
      </section>

      <Link to="/" className={classes.link}>
        Назад на главную
      </Link>
    </main>
  );
}

export default SearchForCity;
