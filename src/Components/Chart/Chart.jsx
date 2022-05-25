import React from "react";

import LineChart from "./LineChart";
import TradingviewChart from "./TradingviewChart";

import { Col, Row, Typography } from "antd";
const { Title } = Typography;

const Chart = ({ coinHistory, currentPrice, coinName, symbol }) => {
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
        {/* <LineChart coinHistory={coinHistory} /> */}
        <TradingviewChart symbol={symbol} />
      </Row>
    </>
  );
};

export default Chart;
