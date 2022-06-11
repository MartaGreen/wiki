import React, { useEffect, useState } from "react";
import styles from "./article.style";
import {
  ICityRequest,
  IPage,
  IPageInfo,
} from "../../interfaces/cityRequest.interface";

import { getCityByString } from "../../requests/city.requests";
import { REQUEST_STATUS } from "../../constants/request.constants";
import loadinIcon from "../../assets/loadinIcon.svg";

function Article({ searchedString }: { searchedString: string }) {
  const [content, setContent] = useState({} as IPageInfo);
  const [status, setStatus] = useState(REQUEST_STATUS.pending);
  const [isNoResults, setIsNoResults] = useState(false);
  const classes = styles();

  const noResultsMsg: (requestMsg: string) => string = (requestMsg) =>
    `По запросу "${requestMsg}" ничего не удалось найти.`;

  useEffect(() => {
    (async function () {
      setStatus(REQUEST_STATUS.pending);
      const cityRequestData: ICityRequest | null = await getCityByString(
        searchedString
      );

      if (!cityRequestData) {
        setStatus(REQUEST_STATUS.error);
        return;
      }
      if (cityRequestData.query) {
        setStatus(REQUEST_STATUS.success);

        // get page and its data: article, extract, pageId etc.
        const page: IPage = cityRequestData.query.pages;
        const pageId: number = Number(Object.keys(page)[0]);
        const pageInfo: IPageInfo = page[pageId];

        // check if extract (info about city) is empty
        if (pageInfo.missing || !pageInfo.extract) {
          pageInfo.extract = noResultsMsg(pageInfo.title);
          setIsNoResults(true);
        } else setIsNoResults(false);

        setContent(pageInfo);
      }
    })();
  }, [searchedString]);

  if (status === REQUEST_STATUS.pending) {
    return <img src={loadinIcon} alt="loading" />;
  }
  if (status === REQUEST_STATUS.error) {
    return <div>error</div>;
  }

  return (
    <section className={classes.article}>
      <h2 className={classes.article__title}>
        {isNoResults ? content.extract : content.title}
      </h2>
      {isNoResults
        ? ""
        : content.extract.split("\n").map((content, index) => {
            return <p key={index}>{content}</p>;
          })}
    </section>
  );
}

export default Article;
