import { LinksCoin } from "./types";
export interface Coin {
  // "24hVolume": string;
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
