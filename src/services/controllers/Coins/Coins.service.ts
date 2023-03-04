import { apiCaller } from 'services/apiCaller'
import { CoinsUrls } from './urls'
import { IResGetCoin, IResGetCoins } from './models'
import { IApiResModel } from 'models/interfaces'
import { IGetCoinParams } from './models/params.models'

export class CoinsService {
  GetCoins(params?: IGetCoinParams) {
    return apiCaller.get<IApiResModel<IResGetCoins>>(CoinsUrls.coins, {
      params,
    })
  }
  async GetCoin(uuid?: string) {
    return apiCaller.get<IApiResModel<IResGetCoin>>(`${CoinsUrls.coin}/${uuid}`)
  }
}
