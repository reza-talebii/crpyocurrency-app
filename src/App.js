import React from "react";
import { Route, Routes, Link } from "react-router-dom";

//IMPORT ANTD COMPONENTS
import { Layout, Typography, Space } from "antd";

//IMPORT COMPONENTS
import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./Components/index";

import "./App.css";

function App() {
  return (
    <section className="App">
      <nav className={"navbar"}>
        <Navbar />
      </nav>
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinID" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <footer
          className="footer"
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          <Typography.Title>
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>
    </section>
  );
}

export default App;
