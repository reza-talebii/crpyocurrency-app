import { useState } from "react";

// import LineChart from "./LineChart";
import TradingviewChart from "./TradingviewChart";

import { Col, Row, Typography, Breadcrumb, Button } from "antd";
const { Title } = Typography;

const Chart = ({ coinHistory, currentPrice, coinName, symbol }) => {
  const [activeChart, setActiveChart] = useState("tradingview");

  //type of btn bg
  const lineChartBgColor =
    activeChart === "tradingview" ? "secondary" : "primary";
  const tradingviewChartBgColor =
    activeChart === "tradingview" ? "primary " : "secondary";

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
      </Row>

      <TradingviewChart symbol={symbol} />
      {/* chose Chart Buttons */}
      {/* <Breadcrumb style={{ textAlign: "center", marginBottom: "1rem" }}>
        <Breadcrumb.Item>
          <Button
            type={lineChartBgColor}
            size="large"
            onClick={() => setActiveChart("Line")}
          >
            Line
          </Button>
        </Breadcrumb.Item>
        <Button
          type={tradingviewChartBgColor}
          size="large"
          onClick={() => setActiveChart("tradingview")}
        >
          Tradingview
        </Button>
      </Breadcrumb>

      {activeChart === "tradingview" ? (
        <TradingviewChart symbol={symbol} />
      ) : (
        <LineChart coinHistory={coinHistory} />
      )} */}
    </>
  );
};

export default Chart;
