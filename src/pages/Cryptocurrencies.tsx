import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";

import millify from "millify";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../common/services/cryptoApi";

import { Error, Loader } from "../common/components";
import { filterCoins } from "../common/helper/filterCoins";

import { TypeSimplified } from "../common/interfaces/types";
import { Coin } from "../common/interfaces/crypto";

const Cryptocurrencies: FC<TypeSimplified> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptos, isFetching, isError } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptoList, setCryptoList] = useState<Coin[]>([]);

  //FILTER COINS & SET "cryptoList" STATE
  useEffect(() => {
    const cryptoCoinsData = cryptos?.data?.coins;
    const filteredCoins = filterCoins(cryptoCoinsData, searchTerm);
    setCryptoList(filteredCoins);
  }, [cryptos, searchTerm]);

  //handling Error & loading
  if (isError) return <Error />;
  if (isFetching) return <Loader />;

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
            <Link to={`/crypto/${crypto.uuid}`}>
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
