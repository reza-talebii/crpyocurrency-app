import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined } from '@ant-design/icons'

export const menuItems = [
  { label: <Link to="/">Home</Link>, key: 'item-1', icon: <HomeOutlined /> },
  {
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    key: 'item-2',
    icon: <FundOutlined />,
  },
  {
    label: <Link to="/exchanges">Exchanges</Link>,
    key: 'item-3',
    icon: <MoneyCollectOutlined />,
  },
  {
    label: <Link to="/news">News</Link>,
    key: 'item-4',
    icon: <BulbOutlined />,
  },
]
