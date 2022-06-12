import { NumberLiteralType } from "typescript";

export interface Coin {
  // "24hVolume": string;
  btcPrice: number;
  change: number;
  coinrankingUrl: string;
  iconUrl: string;
  marketCap: number;
  name: string;
  price: number;
  rank: NumberLiteralType;
  sparkline: [number];
  symbol: string;
  tier: number;
  uuid: number;
}
