import React, {Component} from 'react';
import axios from 'axios';

import Issues from '../components/Issues';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

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
        console.log(res.data);
      })
  }

  render() {
    return (
      <Issues data={listData}/>
    )
  }
}

export default IssueList;