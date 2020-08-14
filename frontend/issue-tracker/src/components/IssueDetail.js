import React from 'react';
import { PageHeader, Tabs, Descriptions } from 'antd';

const IssueDetail = (props) => {
  const { TabPane } = Tabs;

  const creationInfor = (column = 3) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Created by">{props.data.creator}</Descriptions.Item>
      <Descriptions.Item label="Creation Time">{props.data.created}</Descriptions.Item>
      <Descriptions.Item label="Last Modified">{props.data.modified}</Descriptions.Item>
    </Descriptions>
  )

  const Content = ({ children, extra }) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
      </div>
    );
  }

  return (
    <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title={props.data.title}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Description" key="1">{props.data.description}</TabPane>
            <TabPane tab="Comment" key="2" />
          </Tabs>
        }
      >
        <Content>{creationInfor()}</Content>
    </PageHeader>
  );
};

export default IssueDetail;