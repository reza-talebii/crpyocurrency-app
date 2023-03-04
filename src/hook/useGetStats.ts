import { reactQueryEndPoint } from 'constants/reactQueryEndPoint'
import { IReactQueryOption } from 'models/interfaces'
import { useQuery } from 'react-query'
import { StatsService } from 'services/controllers/Stats/Stats.service'
import { IStats } from 'services/controllers/Stats/models'

interface IArgs extends IReactQueryOption<IStats | undefined> {}

export const useGetStats = (args?: IArgs) => {
  const { GetGlobalStats } = new StatsService()

  const fetcher = async () => {
    const res = await GetGlobalStats()
    return res?.data?.data
  }

  const controllers = useQuery(reactQueryEndPoint.stats, fetcher, args?.options)

  return controllers
}
