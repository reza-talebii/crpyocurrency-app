import { useEffect, useState } from "react";

import icon from "../../../../assets/images/icon.png";

import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handelResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  useEffect(() => {
    screenSize < 768 ? setVisible(true) : setVisible(false);
  }, [screenSize]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={3} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          <Button
            className="menu-control-container"
            onClick={() => setVisible((prevState) => !prevState)}
          >
            <MenuOutlined />
          </Button>
        </div>

        {!visible && (
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />} key="2">
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />} key="3">
              <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />} key="4">
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
