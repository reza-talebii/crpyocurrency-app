import React, { FC } from "react";

import { useGetCryptoExchangesQuery } from "../common/services/cryptoExchangesApi";

import { Loader } from "../common/components";

import { Card, Row, Col } from "antd";
import millify from "millify";

import { IExchangesType } from "../common/interfaces/crypto";

const Exchanges: FC = () => {
  const { data: exchanges, isFetching } = useGetCryptoExchangesQuery();

  if (isFetching) return <Loader />;

  return (
    <div>
      {" "}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {exchanges?.map((exchange: IExchangesType) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className={"crypto-card"}
            key={exchange.id}
          >
            <a href={exchange.url} target="_blank" rel="noreferrer">
              <Card
                title={`${exchange.trust_score_rank} ${exchange.name}`}
                extra={
                  <img
                    alt="coin-logo"
                    className="crypto-image"
                    src={exchange.image}
                  />
                }
                hoverable
              >
                <p>country:{exchange.country}</p>
                <p>year established: {exchange.year_established}</p>
                <p>24 volume: {millify(exchange.trade_volume_24h_btc)}</p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;
