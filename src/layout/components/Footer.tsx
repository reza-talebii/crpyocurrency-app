import { Typography, Space } from "antd";
import { FC } from "react";

import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Typography.Title
        style={{ color: "white", textAlign: "center" }}
        level={5}
      >
        Cryptoverse <br />
        All rights reserverd
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </footer>
  );
};

export default Footer;
