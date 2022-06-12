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
          <Routers />
        </Layout>
        <Footer />
      </main>
    </section>
  );
};

export default MainLayout;
