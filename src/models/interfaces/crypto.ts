import { LinksCoin } from "../types";
export interface ICoin {
  ["24hVolume"]: string;
  allTimeHigh: { price: string; timestamp: number };
  btcPrice: number;
  change: string;
  coinrankingUrl: string;
  color: string;
  description: any;
  iconUrl: string;
  links: LinksCoin[];
  listedAt: number;
  lowVolume: false;
  marketCap: string;
  name: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: string;
  priceAt: number;
  rank: 1;
  sparkline: number[];
  supply: { confirmed: true; total: "19066281"; circulating: string };
  symbol: string;
  tier: 1;
  uuid: string;
  websiteUrl: string;
}

export interface IExchangesType {
  country: string;
  description: string;
  has_trading_incentive: boolean;
  id: string;
  image: string;
  name: string;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  trust_score: number;
  trust_score_rank: number;
  url: string;
  year_established: number;
}

export interface INewsCoin {
  category: string;
  datePublished: string;
  description: string;
  image: {
    thumbnail: {
      _type: string;
      contentUrl: string;
      width: number;
      height: number;
    };
    _type: string;
  };
  name: any;
  provider: {
    name: string;
    _type: string;
    image: {
      _type: string;
      thumbnail: {
        contentUrl: string;
        _type: string;
      };
    };
  }[];
  url: string;
  _type: string;
}

export interface IAllNews {
  queryContext: object;
  readLink: string;
  sort: object;
  totalEstimatedMatches: number;
  value: INewsCoin[];
  _type: string;
}

export interface IHistoryQuery {
  data: {
    change: any;
  };
}

export interface IStats {
  total: string;
  total24hVolume: string;
  totalCoins: string;
  totalExchanges: string;
  totalMarketCap: string;
  totalMarkets: string;
}

export interface ICoins {
  ["24hVolume"]: string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: false;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: [string];
  tier: string;
  symbol: string;
  uuid: string;
}

export interface ICryptosQuery {
  data: {
    coins: ICoins[];
    stats: IStats;
  };
  status?: "success";
}

export interface ICryptoDetailQuery {
  data: {
    coin: ICoin;
    stats?: IStats;
  };
  status?: "success";
}
