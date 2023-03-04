import { IStats } from 'services/controllers/Stats/models'

export interface ICoin {
  ['24hVolume']: string
  btcPrice: string
  change: string
  coinrankingUrl: string
  color: string
  iconUrl: string
  listedAt: number
  lowVolume: false
  marketCap: string
  name: string
  price: string
  rank: number
  sparkline: [string]
  tier: string
  symbol: string
  uuid: string
}

export interface IResGetCoins {
  coins: ICoin[]
  stats: IStats
}
export interface IResGetCoin {
  coin: any
}
