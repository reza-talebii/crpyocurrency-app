import React from "react";
import { Route } from "react-router-dom";

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
            <Route path="/" element={<HomePage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinID" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </div>
        </Layout>
      </main>
      <footer className="footer"></footer>
    </section>
  );
}

export default App;
