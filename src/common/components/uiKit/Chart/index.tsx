import { FC } from "react";

// import LineChart from "./LineChart";
import TradingviewChart from "./TradingviewChart";
import { ChartProps } from "./interfaces";

import { Col, Row, Typography } from "antd";
const { Title } = Typography;

const Chart: FC<ChartProps> = ({
  coinHistory,
  currentPrice,
  coinName,
  symbol,
}) => {
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>

      <TradingviewChart symbol={symbol} />
    </>
  );
};

export default Chart;
