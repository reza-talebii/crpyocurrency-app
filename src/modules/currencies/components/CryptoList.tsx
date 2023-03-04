import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'models/enums'
import { Card, Col, Input, Row, Spin } from 'antd'
import ErrorResult from 'components/ErrorResult'
import { QueryCache } from 'react-query'
import { IResGetCoins } from 'services/controllers/Coins/models'

interface IProps {
  data: IResGetCoins | undefined
  loading: boolean
  isError: boolean
  tyAgainHandler: () => void
}

const CryptoList: FC<IProps> = ({ data, isError, loading, tyAgainHandler }) => {
  //   handling Error & loading
  if (isError) return <ErrorResult tyAgainHandler={tyAgainHandler} />
  if (loading) return <Spin />

  return (
    <Row gutter={[32, 32]} className="crypto-card-container">
      {data?.coins.map(crypto => (
        <Col xs={24} sm={12} lg={6} className={'crypto-card'} key={crypto.uuid}>
          <Link to={crypto.uuid.toString()}>
            <Card
              title={`${crypto.rank} ${crypto.name}`}
              extra={<img alt="coin-logo" className="crypto-image" src={crypto.iconUrl} />}
              hoverable
            >
              <p>Price:{crypto.price}</p>
              <p>Market Cap: {crypto.marketCap}</p>
              <p>Daily Change: {crypto.change}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default CryptoList
