import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import IssueEditForm from '../components/IssueEditForm';
import IssueDetail from '../components/IssueDetail';

class IssueDetailView extends Component {
  
  state = {
    issue:[],
    isEdit: false
  }

  componentDidMount() {
    const id = this.props.match.params.issueID;
    axios.get(`http://127.0.0.1:8000/issue_tracker/issues/${id}`)
      .then(res => {
        this.setState({
          issue: res.data
        });
      })
  }

  handleEdit = (edit) => {
    this.setState({
      isEdit: edit
    });
  }

  render() {
    return (
      <>
      {this.state.isEdit ? <IssueEditForm /> : <IssueDetail data={this.state.issue}/>}
      </>
    );
  }
}

export default connect()(IssueDetailView);