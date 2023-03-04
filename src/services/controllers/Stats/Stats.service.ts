import { apiCaller } from 'services/apiCaller'
import { StatsUrls } from './urls'
import { IStats } from './models'
import { IApiResModel } from 'models/interfaces'

export class StatsService {
  GetGlobalStats() {
    return apiCaller.get<IApiResModel<IStats>>(StatsUrls.stats)
  }
}
