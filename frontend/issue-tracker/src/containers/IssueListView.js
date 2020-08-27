import React, { Component } from 'react';
import axios from 'axios';
import '../style/issue_list.scss';
import Issues from '../components/Issues';
import { connect } from 'react-redux';

class IssueList extends Component {
  
  state = {
    issues:[]
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/issue_tracker/issues')
      .then(res => {
        this.setState({
          issues: res.data
        });
        console.log(this.state.issues);
      })
  }

  render() {
    return (
      <Issues data={this.state.issues}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(IssueList);