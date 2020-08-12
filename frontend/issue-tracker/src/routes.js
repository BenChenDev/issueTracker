import React from 'react';
import {Route} from 'react-router-dom';
import IssueList from './containers/IssueListView';
import IssueDetail from './containers/IssueDetailView';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={IssueList} />
    <Route exact path='/:issueID' component={IssueDetail} />
  </div>
)

export default BaseRouter;