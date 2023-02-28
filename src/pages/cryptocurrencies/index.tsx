import { useState, useEffect, FC } from 'react'
import { Link } from 'react-router-dom'

// import millify from "millify";
import { Card, Row, Col, Input } from 'antd'

// import { useGetCryptosQuery } from "../common/services/cryptoApi";

// import { Error, Loader } from "../common/components";
import { TypeSimplified } from 'models/types'
import { ICoins } from 'models/interfaces/crypto'
// import { filterCoins } from "../common/helper/filterCoins";

// import { TypeSimplified } from "../common/types";
// import { ICoins } from "../common/interfaces/crypto";

const Cryptocurrencies: FC<TypeSimplified> = ({ simplified }) => {
  const count = simplified ? 10 : 100
  // const { data: cryptos, isFetching, isError } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState('')
  const [cryptoList, setCryptoList] = useState<ICoins[]>([])

  //FILTER COINS & SET "cryptoList" STATE
  // useEffect(() => {
  //   const cryptoCoinsData = cryptos?.data?.coins;

  //   const filteredCryptos = cryptoCoinsData?.filter(
  //     (coin: ICoins) =>
  //       coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   if (filteredCryptos !== undefined) setCryptoList(filteredCryptos);
  // }, [cryptos, searchTerm]);

  // //handling Error & loading
  // if (isError) return <Error />;
  // if (isFetching) return <Loader />;

  return (
    <>
      {/* SEARCH CRYPTOCURRENCIES */}
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search crypto ..." onChange={e => setSearchTerm(e.target.value)} />
        </div>
      )}

      {/* CRYPTOCURRENCIES */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptoList?.map(crypto => (
          <Col xs={24} sm={12} lg={6} className={'crypto-card'} key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
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
    </>
  )
}

export default Cryptocurrencies
