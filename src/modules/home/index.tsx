import { Typography } from 'antd'
import Statistics from './modules/Statistics'
import { ROUTES } from 'models/enums'
import TitleHomeModule from '../../modules/home/components/Title'
import { useGetStats } from 'hook'
import { useGetCoins } from 'hook/useGetCoins'
import TopCoins from './modules/TopCoins'
const { Title } = Typography

const Home = () => {
  const StatsControllers = useGetStats()
  const CoinControllers = useGetCoins({ params: { limit: 10, orderBy: 'marketCap' } })

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Statistics
        tyAgainHandler={() => StatsControllers.refetch()}
        data={StatsControllers?.data}
        loading={StatsControllers.isLoading}
        isError={StatsControllers.isError}
      />

      <TitleHomeModule title="Top 10 CryptoCurrencies in the world" linkMore={ROUTES.cryptocurrencies} />

      <TopCoins
        data={CoinControllers.data}
        tyAgainHandler={() => CoinControllers.refetch()}
        loading={CoinControllers.isLoading}
        isError={CoinControllers.isError}
      />
      {/* 
      <TitleHomeModule title=" Latest Crypto News" linkMore={ROUTES.news} /> */}

      {/*<News simplified={true} /> */}
    </>
  )
}

export default Home
