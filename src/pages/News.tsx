import React from "react";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../common/services/cryptoNewsApi";
import { useGetCryptosQuery } from "../common/services/cryptoApi";
import { Error, Loader } from "../common/components";
import { TypeSimplified } from "../common/interfaces/types";
import { Coin, NewsCoin } from "../common/interfaces/crypto";

import { Typography, Row, Col, Avatar, Card } from "antd";
const { Text, Title } = Typography;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News: React.FC<TypeSimplified> = ({ simplified }) => {
  const { data } = useGetCryptosQuery(100);
  const count = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = React.useState("cryptocurrency");
  const {
    data: cryptoNews,
    isFetching,
    isError,
  } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });

  if (isFetching) return <Loader />;
  if (isError) return <Error />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <select
            className="select-news"
            placeholder="Select a Crypto"
            value={newsCategory}
            onChange={(e) => setNewsCategory(e.target.value)}
          >
            <option value="Cryptocurency">Cryptocurrency</option>
            {data?.data?.coins?.map((currency: Coin, index: number) => (
              <option value={currency?.name} key={index}>
                {currency?.name}
              </option>
            ))}
          </select>
        </Col>
      )}

      {cryptoNews.value.map((news: NewsCoin, i: number) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {/* {moment(news.datePublished).startOf("ss").fromNow()} */}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
