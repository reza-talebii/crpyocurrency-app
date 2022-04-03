import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

//IMPORT ANTD COMPONENTS
import { Layout, Typography, Space } from "antd";

//IMPORT COMPONENTS
import { Navbar } from "./Components/index";

import "./App.css";

function App() {
  return (
    <section className="App">
      <nav className={"navbar"}>
        <Navbar />
      </nav>
      <main className="main"></main>
      <footer className="footer"></footer>
    </section>
  );
}

export default App;
