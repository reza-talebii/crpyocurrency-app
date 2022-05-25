import React from "react";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function ChartCom({ price, currency, symbol }) {
  return (
    <AdvancedRealTimeChart
      theme="light"
      autosize
      hide_legend
      hide_top_toolbar
      hide_side_toolbar
      style={3}
      symbol={symbol + currency}
    ></AdvancedRealTimeChart>
  );
}

export default ChartCom;
