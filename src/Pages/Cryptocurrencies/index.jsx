import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptos, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const cryptoCoinsData = cryptos?.data?.coins;
    const filteredCryptos = cryptoCoinsData?.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptoList(filteredCryptos);
  }, [cryptos, searchTerm]);

  //LOADING
  if (isFetching) return "Loading...";

  return (
    <>
      {/* SEARCH CRYPTOCURRENCIES */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search crypto ..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* CRYPTOCURRENCIES */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptoList?.map((crypto) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className={"crypto-card"}
            key={crypto.uuid}
          >
            <Link to={`/cryptoDetail/${crypto.uuid}`}>
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
