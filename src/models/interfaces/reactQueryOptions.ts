import { UseQueryOptions } from 'react-query'

export interface IReactQueryOption<T> {
  options?: UseQueryOptions<any, any, T, any>
}
