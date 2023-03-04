import { Input } from 'antd'
import { useGetCoins } from 'hook'
import { useCallback, useState } from 'react'
import { IGetCoinParams } from 'services/controllers/Coins/models'
import CryptoList from './components/CryptoList'
import _ from 'lodash'

const defaultParams: IGetCoinParams = {
  limit: 30,
  offset: 0,
  orderBy: 'marketCap',
}

const Currencies = () => {
  const [params, setParams] = useState<IGetCoinParams>(defaultParams)

  const { isError, isLoading, refetch, data } = useGetCoins({ params: params })

  const onChangeSearch = (value: string) => setParams(prev => ({ ...prev, search: value }))
  const debounceFn = useCallback(_.debounce(onChangeSearch, 1000), [])

  return (
    <>
      <div className="search-crypto">
        <Input placeholder="Search crypto name ..." onChange={e => debounceFn(e.target.value)} />
      </div>

      <CryptoList isError={isError} loading={isLoading} data={data} tyAgainHandler={() => refetch()} />
    </>
  )
}

export default Currencies
