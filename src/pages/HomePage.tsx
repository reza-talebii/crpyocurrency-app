import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";

import { useGetCryptosQuery } from "../common/services/cryptoApi";
import { Loader, Error } from "../common/components";
import { Cryptocurrencies, News } from "./";

import { Typography, Row, Col, Statistic } from "antd";
const { Title } = Typography;

const HomePage: React.FC = () => {
  const { data, isFetching, isError } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  //handling Error & loading
  if (isError) return <Error />;
  if (isFetching) return <Loader />;

  const {
    total,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    totalMarkets,
  } = { ...globalStats };

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={total24hVolume} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets} />
        </Col>
      </Row>

      {/* COIN HEADER */}
      <section className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </section>
      <Cryptocurrencies simplified={true} />

      {/* NEWS HEADER */}
      <section className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </section>
      <News simplified={true} />
    </>
  );
};

export default HomePage;
