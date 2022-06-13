export type TypeSimplified = {
  simplified: boolean | null;
};

export type LinksCoin = {
  name: string;
  type: string;
  url: string;
};

export type paramHistory = {
  coinID: any;
  timePeriod: string;
};

export type NewsCoinParamsQuery = { newsCategory: string; count: number };
