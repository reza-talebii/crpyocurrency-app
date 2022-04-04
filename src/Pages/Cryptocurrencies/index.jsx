import React from "react";

import { Link } from "react-router-dom";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = React.useState(cryptoList.data.coins);

  console.log(cryptos);

  return <div>Cryptocurrencies</div>;
};

export default Cryptocurrencies;
