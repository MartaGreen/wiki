import React, { useEffect, useState } from "react";
import {
  ICityRequest,
  IPage,
  IPageInfo,
} from "../../interfaces/cityRequest.interface";
import { getCityByString } from "../../requests/city.requests";
import styles from "./article.style";

function Article({ searchedString }: { searchedString: string }) {
  const [content, setContent] = useState({} as IPageInfo);
  const classes = styles();

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

  return (
    <section className={classes.article}>
      <h2 className={classes.article__title}>{content.title}</h2>
      {content.extract
        ? content.extract.split("\n").map((content, index) => {
            return <p key={index}>{content}</p>;
          })
        : ""}
    </section>
  );
}

export default Article;
