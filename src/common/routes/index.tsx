import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "../../pages";

const Routers = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/exchanges" element={<Exchanges />} /> */}
        <Route
          path="/cryptocurrencies"
          element={<Cryptocurrencies simplified={null} />}
        />
        <Route path="/crypto/:coinID" element={<CryptoDetails />} />
        <Route path="/news" element={<News simplified={null} />} />
      </Routes>
    </div>
  );
};

export default Routers;
