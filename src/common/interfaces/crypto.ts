import { LinksCoin } from "../types";
export interface ICoin {
  "24hVolume": number;
  btcPrice: number;
  change: number;
  coinrankingUrl: string;
  iconUrl: string;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  sparkline: [number];
  symbol: string;
  tier: number;
  uuid: number;
  links: LinksCoin[];
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
  total: any;
  total24hVolume: any;
  totalCoins: any;
  totalExchanges: any;
  totalMarketCap: any;
  totalMarkets: any;
}

export interface ICryptodQuery {
  data: {
    coins: ICoin[];
    stats?: IStats;
  };
  status?: string;
}
