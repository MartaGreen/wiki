export interface ICityRequest {
  batchcomplete: string;
  query: {
    pages: IPage;
  };
}

export interface IPage {
  [pageNum: number]: IPageInfo;
}

export interface IPageInfo {
  extract: string;
  ns: number;
  pageId: number;
  title: string;
}
