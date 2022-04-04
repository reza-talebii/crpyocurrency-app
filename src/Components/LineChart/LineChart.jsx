//react-chart-2 now installed

import React from "react";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ history, coinPrice: currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < history?.data?.history?.length; i += 1) {
    coinPrice.push(history?.data?.history[i].price);
    coinTimestamp.push(
      new Date(history?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {history?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>

        {/* <Line data={data} options={options} /> */}
      </Row>
    </>
  );
};

export default LineChart;
