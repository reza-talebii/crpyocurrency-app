import React from 'react'
import { Link } from 'react-router-dom'

// import { useGetCryptosQuery } from '../common/services/cryptoApi'
// import { Loader, Error } from '../common/components'
// import { Cryptocurrencies, News } from './'

import { Typography, Row, Col, Statistic } from 'antd'
import { currencyFormatter } from 'helper'
const { Title } = Typography

const HomePage: React.FC = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      {/* <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={total && currencyFormatter(+total)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges && currencyFormatter(+totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={totalMarketCap && currencyFormatter(+totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={total24hVolume && currencyFormatter(+total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets && currencyFormatter(+totalMarkets)} />
        </Col>
      </Row> */}

      {/* COIN HEADER */}
      {/* <section className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </section>
      <Cryptocurrencies simplified={true} /> */}

      {/* NEWS HEADER */}
      {/* <section className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </section>
      <News simplified={true} /> */}
    </>
  )
}

export default HomePage
