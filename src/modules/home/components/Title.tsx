import { Link } from 'react-router-dom'
import { Typography, Space } from 'antd'
import { FC } from 'react'
const { Title } = Typography

interface IProps {
  title: string
  linkMore: string
}

const TitleHomeModule: FC<IProps> = ({ title, linkMore }) => {
  return (
    <Space className="home-heading-container">
      <Title level={2} className="home-title">
        {title}
      </Title>
      <Title level={3} className="show-more">
        <Link to={linkMore}>Show More</Link>
      </Title>
    </Space>
  )
}

export default TitleHomeModule
