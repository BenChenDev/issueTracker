import React, {Component} from 'react';
import axios from 'axios';

import Issues from '../components/Issues';

class IssueList extends Component {
  
  state = {
    issues:[]
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/issues/')
      .then(res => {
        this.setState({
          issues: res.data
        });
      })
  }

  render() {
    return (
      <Issues data={this.state.issues}/>
    )
  }
}

export default IssueList;