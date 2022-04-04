import React from "react";

import { Link } from "react-router-dom";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = React.useState(cryptoList.data.coins);

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((crypto) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className={"crypto-card"}
            key={crypto.uuid}
          >
            <Link to={`/cryptoDetail/${crypto.id}`}>
              <Card
                title={`${crypto.rank} ${crypto.name}`}
                extra={
                  <img
                    alt="coin-logo"
                    className="crypto-image"
                    src={crypto.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price:{millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
