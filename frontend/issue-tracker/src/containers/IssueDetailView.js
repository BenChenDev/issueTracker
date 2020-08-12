import React, {Component} from 'react';
import axios from 'axios';
import { Card } from 'antd';

class IssueDetail extends Component {
  
  state = {
    issue:[]
  }
  
  componentDidMount() {
    const id = this.props.match.params.issueID;
    axios.get(`http://127.0.0.1:8000/api/issues/${id}`)
      .then(res => {
        this.setState({
          issue: res.data
        });
      })
  }

  render() {
    return (
      <Card title={this.state.issue.title}>
        <p>{this.state.issue.description}</p>
      </Card>
    )
  }
}

export default IssueDetail;