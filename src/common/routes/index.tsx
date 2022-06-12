import React from "react";
import { Route, Routes } from "react-router-dom";

import { PublicRoutes } from "./routes";

const Routers: React.FC = () => {
  return (
    <Routes>
      {Object.keys(PublicRoutes).map((key, index) => {
        const { return: page, get: route } = PublicRoutes[key];
        return <Route key={index} path={route} element={page} />;
      })}
    </Routes>
  );
};

export default Routers;
