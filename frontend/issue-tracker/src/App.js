import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import IssueList from './containers/IssueListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <IssueList />
      </CustomLayout>
    </div>
  );
}

export default App;
