import React, {Component} from 'react';
import axios from 'axios';
import { Card, Button, Tooltip, PageHeader, Tabs, Statistic, Descriptions} from 'antd';
import { EditOutlined } from '@ant-design/icons';

class IssueDetail extends Component {
  
  state = {
    issue:[]
  }

  componentDidMount() {
    const id = this.props.match.params.issueID;
    axios.get(`http://127.0.0.1:8000/issue_tracker/api/issues/${id}`)
      .then(res => {
        this.setState({
          issue: res.data
        });
      })
  };

  render() {
    const { TabPane } = Tabs
    const title = this.state.issue.title ? this.state.issue.title : ""
    const creator = this.state.issue.creator ? this.state.issue.creator : ""
    const description = this.state.issue.description ? this.state.issue.description : ""
    const createTime = this.state.issue.created ? this.state.issue.created : ""
    const modified = this.state.issue.modified ? this.state.issue.modified : ""

    const creationInfor = (column = 3) => (
      <Descriptions size="small" column={column}>
        <Descriptions.Item label="Created by">{creator}</Descriptions.Item>
        <Descriptions.Item label="Creation Time">{createTime}</Descriptions.Item>
        <Descriptions.Item label="Last Modified">{modified}</Descriptions.Item>
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
        title={title}
        extra={[
          <Tooltip title="edit">
            <Button type="primary" icon={<EditOutlined/>}>Edit</Button>
          </Tooltip>
        ]}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Description" key="1">{description}</TabPane>
            <TabPane tab="Comment" key="2" />
          </Tabs>
        }
      >
        <Content>{creationInfor()}</Content>
      </PageHeader>
    )
  }
}

export default IssueDetail;