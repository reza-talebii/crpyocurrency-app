import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'

import { Col, Row, Spin, Typography } from 'antd'
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { currencyFormatter } from 'helper'
import ErrorResult from 'components/ErrorResult'
import { useGetCoins } from 'hook'
import { CoinsService } from 'services/controllers/Coins/Coins.service'
import { reactQueryEndPoint } from 'constants/reactQueryEndPoint'
import { useQuery } from 'react-query'
import Chart from 'components/Chart'
import { LinksCoin } from 'models/types'

const { Title, Text } = Typography

const Crypto = () => {
  const { id } = useParams()
  const { GetCoin } = new CoinsService()

  const fetcher = async () => {
    const res = await GetCoin(id)
    return res?.data.data.coin
  }

  const { data, isError, isLoading, refetch } = useQuery([reactQueryEndPoint.coin, id], fetcher)

  //handling Error & loading
  if (isError) return <ErrorResult tyAgainHandler={refetch} />
  if (isLoading) return <Spin />

  const cryptoDetails = data

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && currencyFormatter(+cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${cryptoDetails?.['24hVolume'] && currencyFormatter(+cryptoDetails?.['24hVolume'])}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${cryptoDetails?.marketCap && currencyFormatter(+cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${cryptoDetails?.allTimeHigh?.price && currencyFormatter(+cryptoDetails?.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ]

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges && currencyFormatter(+cryptoDetails?.numberOfExchanges),
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${cryptoDetails?.supply?.total && currencyFormatter(+cryptoDetails?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${cryptoDetails?.supply?.circulating && currencyFormatter(+cryptoDetails?.supply?.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ]

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </Title>
        <p>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </Col>

      {cryptoDetails && (
        <Chart
          coinHistory={cryptoDetails?.change}
          currentPrice={cryptoDetails?.price}
          coinName={cryptoDetails?.name}
          symbol={cryptoDetails?.symbol}
        />
      )}

      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading
              volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }, i) => (
            <Col className="coin-stats" key={i}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Stats Info
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading
              volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }, i) => (
            <Col className="coin-stats" key={i}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>

      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails?.name}?
          </Title>
          {HTMLReactParser(cryptoDetails?.description)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails?.name} Links
          </Title>
          {cryptoDetails?.links?.map((link: LinksCoin) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  )
}

export default Crypto
