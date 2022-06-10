import React, { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import styles from "./searchField.style";

function SearchField({
  setSearchedString,
}: {
  setSearchedString: Dispatch<SetStateAction<string>>;
}) {
  const form = useRef(null);
  const classes = styles();

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

export default SearchField;
