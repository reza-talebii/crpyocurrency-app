import { Col, Row, Spin, Statistic } from 'antd'
import ErrorResult from 'components/ErrorResult'
import { currencyFormatter } from 'helper'
import React, { FC } from 'react'
import { IStats } from 'services/controllers/Stats/models'

interface IProps {
  isError: boolean
  loading: boolean
  data?: IStats
  tyAgainHandler: () => void
}

const Statistics: FC<IProps> = ({ data, isError, loading, tyAgainHandler }) => {
  if (loading) return <Spin />
  if (isError) return <ErrorResult title="Error in receiving information" subTitle="Please try again" tyAgainHandler={tyAgainHandler} />

  const { totalCoins, total24hVolume, totalExchanges, totalMarketCap, totalMarkets } = data!

  return (
    <Row>
      <Col span={12}>
        <Statistic title="Total CryptoCurrencies" value={currencyFormatter(+totalCoins)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Exchanges" value={currencyFormatter(+totalExchanges)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Market Cap" value={currencyFormatter(+totalMarketCap)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total 24h Volume" value={currencyFormatter(+total24hVolume)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Markets" value={currencyFormatter(+totalMarkets)} />
      </Col>
    </Row>
  )
}

export default Statistics
