import { useEffect, useState } from "react";

// import icon from "../../../../assets/images/icon.png";

import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { menuItems } from "../../helper/dummyData";

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
          <Avatar src={""} size="large" />
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

        {!visible && <Menu items={menuItems} theme="dark" />}
      </div>
    </nav>
  );
};

export default Navbar;
