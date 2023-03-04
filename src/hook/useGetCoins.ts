import { reactQueryEndPoint } from 'constants/reactQueryEndPoint'
import { IReactQueryOption } from 'models/interfaces'
import { useQuery } from 'react-query'
import { CoinsService } from 'services/controllers/Coins/Coins.service'
import { IGetCoinParams, IResGetCoins } from 'services/controllers/Coins/models'

interface IArgs extends IReactQueryOption<IResGetCoins | undefined> {
  params?: IGetCoinParams
}

export const useGetCoins = (args?: IArgs) => {
  const { GetCoins } = new CoinsService()

  const fetcher = async () => {
    const res = await GetCoins(args?.params)
    return res?.data?.data
  }

  const controllers = useQuery([reactQueryEndPoint.coins, args?.params], fetcher, args?.options)

  return controllers
}
