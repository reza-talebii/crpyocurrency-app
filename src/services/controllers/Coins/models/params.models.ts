export type IGetCoinParams = Partial<{
  offset: number
  limit: number
  referenceCurrencyUuid: string
  timePeriod: string
  orderBy: string
  orderDirection: string
  search: string
  uuids: string | number
}>
