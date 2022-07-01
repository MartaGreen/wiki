import React, { useEffect, useState } from "react";
import styles from "./article.style";
import {
  CityRequestType,
  PageType,
  PageInfoType,
} from "../../types/cityRequest.types";

import { getCityByName } from "../../api/city.api";
import { REQUEST_STATUS } from "../../constants/request.constants";
import loadinIcon from "../../assets/loadinIcon.svg";

function Article({
  cityName,
  resetCityName,
}: {
  cityName: string;
  resetCityName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [content, setContent] = useState({} as PageInfoType);
  const [status, setStatus] = useState(REQUEST_STATUS.pending);
  const [isNoResults, setIsNoResults] = useState(false);
  const classes = styles();

  const noResultsMsg: (requestedCity: string) => string = (requestedCity) =>
    `По запросу "${requestedCity}" ничего не удалось найти.`;

  useEffect(() => {
    const getCity = async () => {
      setStatus(REQUEST_STATUS.pending);
      const cityRequestData: CityRequestType | null = await getCityByName(
        cityName
      );

      if (!cityRequestData) {
        setStatus(REQUEST_STATUS.error);
        resetCityName("");
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
  }, [cityName]);

  function createContentParagraphId(paragraph: string) {
    return paragraph.split(" ").slice(0, 3).join("");
  }

  return (
    <section className={classes.article}>
      {status === REQUEST_STATUS.pending && (
        <img src={loadinIcon} alt="loading" />
      )}
      {status === REQUEST_STATUS.error && (
        <div className={classes.errorMsg}>
          Не удалось получить доступ к сайту.
          <br /> Перезагрузите страницу или попробуйте позже.
        </div>
      )}
      {status === REQUEST_STATUS.success && (
        <div>
          <h2 className={classes.article__title}>
            {isNoResults ? content.extract : content.title}
          </h2>
          {!isNoResults &&
            content.extract.split("\n").map((content) => {
              return <p key={createContentParagraphId(content)}>{content}</p>;
            })}
        </div>
      )}
    </section>
  );
}

export default Article;
