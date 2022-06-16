export type CityRequestType = {
  batchcomplete: string;
  query: {
    pages: PageType;
  };
};

export type PageType = {
  [pageNum: number]: PageInfoType;
};

export type PageInfoType = {
  extract: string;
  missing?: string;
  ns: number;
  pageId: number;
  title: string;
};
