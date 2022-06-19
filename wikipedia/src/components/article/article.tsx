import React, { useEffect, useState } from "react";
import styles from "./article.style";
import {
  CityRequestType,
  PageType,
  PageInfoType,
} from "../../types/cityRequest.types";

import { getCityByString } from "../../api/city.requests";
import { REQUEST_STATUS } from "../../constants/request.constants";
import loadinIcon from "../../assets/loadinIcon.svg";

function Article({ searchedString }: { searchedString: string }) {
  const [content, setContent] = useState({} as PageInfoType);
  const [status, setStatus] = useState(REQUEST_STATUS.pending);
  const [isNoResults, setIsNoResults] = useState(false);
  const classes = styles();

  const noResultsMsg: (requestMsg: string) => string = (requestMsg) =>
    `По запросу "${requestMsg}" ничего не удалось найти.`;

  useEffect(() => {
    const getCity = async () => {
      setStatus(REQUEST_STATUS.pending);
      const cityRequestData: CityRequestType | null = await getCityByString(
        searchedString
      );

      if (!cityRequestData) {
        setStatus(REQUEST_STATUS.error);
        return;
      }
      if (cityRequestData.query) {
        setStatus(REQUEST_STATUS.success);

        // get page and its data: article, extract, pageId etc.
        const page: PageType = cityRequestData.query.pages;
        const pageId: number = Number(Object.keys(page)[0]);
        const pageInfo: PageInfoType = page[pageId];

        // check if extract (info about city) is empty
        if (pageInfo.missing || !pageInfo.extract) {
          pageInfo.extract = noResultsMsg(pageInfo.title);
          setIsNoResults(true);
        } else setIsNoResults(false);

        setContent(pageInfo);
      }
    };

    getCity();
  }, [searchedString]);

  function createContentParagraphId(paragraph: string) {
    return paragraph.split(" ").slice(0, 3).join("");
  }

  const pageContent = (status === REQUEST_STATUS.pending && (
    <img src={loadinIcon} alt="loading" />
  )) ||
    (status === REQUEST_STATUS.error && (
      <div className={classes.errorMsg}>
        Не удалось получить доступ к сайту.
        <br /> Перезагрузите страницу или попробуйте позже.
      </div>
    )) || (
      <section className={classes.article}>
        <h2 className={classes.article__title}>
          {isNoResults ? content.extract : content.title}
        </h2>
        {!isNoResults &&
          content.extract.split("\n").map((content) => {
            return <p key={createContentParagraphId(content)}>{content}</p>;
          })}
      </section>
    );

  return pageContent;
}

export default Article;
