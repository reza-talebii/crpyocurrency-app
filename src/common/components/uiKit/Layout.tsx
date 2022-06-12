import React from "react";

import { Layout } from "antd";

import { Navbar, Footer } from "../../components";
import Routers from "../../routes";

const MainLayout: React.FC = () => {
  return (
    <section className="app">
      <Navbar />
      <main className="main">
        <Layout>
          <section className="routes">
            <Routers />
          </section>
        </Layout>
        <Footer />
      </main>
    </section>
  );
};

export default MainLayout;
