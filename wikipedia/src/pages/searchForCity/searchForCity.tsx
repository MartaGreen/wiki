import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./searchForCity.style";

import { getCityByString, getUserCity } from "../../requests/city.requests";
import {
  ICityRequest,
  IPageInfo,
  IPage,
} from "../../interfaces/cityRequest.interface";

function SearchForCity() {
  const [content, setContent] = useState({} as IPageInfo);
  const [searchedString, setSearchedString] = useState("");

  const classes = styles();

  const form = useRef(null);

  useEffect(() => {
    (async function () {
      const city: string | null = await getUserCity();
      if (city) setSearchedString(city);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const cityRequestData: ICityRequest | null = await getCityByString(
        searchedString
      );
      if (!cityRequestData) return;
      const page: IPage = cityRequestData.query.pages;
      const pageId: number = Number(Object.keys(page)[0]);
      const pageInfo: IPageInfo = page[pageId];
      console.log(pageInfo);
      setContent(pageInfo);
    })();
  }, [searchedString]);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // get searched town from input
    // transform every first letter to uppercase for better requesting
    const input: HTMLInputElement = (
      event.target as HTMLFormElement
    ).getElementsByClassName(classes.searchField__input)[0] as HTMLInputElement;
    const inputText: string = input.value;
    const searchedString: string = transformWord(inputText)
      .upperFirstLetter("-")
      .upperFirstLetter(" ")
      .get();

    setSearchedString(searchedString);
  }

  return (
    <main className={classes.main}>
      <form
        className={classes.searchField}
        onFocus={() => {
          if (form.current)
            (form.current as HTMLFormElement).classList.add(
              classes["searchField-onFocus"]
            );
        }}
        onBlur={() => {
          if (form.current)
            (form.current as HTMLFormElement).classList.remove(
              classes["searchField-onFocus"]
            );
        }}
        onSubmit={(e) => submitHandler(e)}
        ref={form}
      >
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

function transformWord(word: string) {
  let transformedWord = word;
  return {
    upperFirstLetter: function (splitBy: string) {
      transformedWord = transformedWord
        .split(splitBy)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(splitBy);
      return this;
    },

    get: function () {
      return transformedWord;
    },
  };
}

export default SearchForCity;
