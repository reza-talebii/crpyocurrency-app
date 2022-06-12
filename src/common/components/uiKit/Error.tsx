import { Result, Button, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { FC } from "react";

const { Paragraph, Text } = Typography;

const Error: FC = () => {
  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => window.location.reload()}
        >
          Refresh the Page
        </Button>,
      ]}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            The content you submitted has the following error:
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" />
          Make sure your VPN is connected
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Make
          sure you have an internet connection
        </Paragraph>
      </div>
    </Result>
  );
};

export default Error;
