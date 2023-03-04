import { Card, Col, Row, Spin } from 'antd'
import ErrorResult from 'components/ErrorResult'
import { ROUTES } from 'models/enums'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICoin, IResGetCoins } from 'services/controllers/Coins/models'

interface IProps {
  data: IResGetCoins | undefined
  loading: boolean
  isError: boolean
  tyAgainHandler: () => void
}

const TopCoins: FC<IProps> = ({ data, loading, isError, tyAgainHandler }) => {
  if (loading) return <Spin />
  if (isError) return <ErrorResult title="Error in receiving information" subTitle="Please try again" tyAgainHandler={tyAgainHandler} />

  return (
    <Row gutter={[32, 32]} className="crypto-card-container">
      {data?.coins?.map(crypto => (
        <Col xs={24} sm={12} lg={6} className={'crypto-card'} key={crypto.uuid}>
          <Link to={crypto.uuid}>
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

export default TopCoins
