import React from 'react';
import {Route} from 'react-router-dom';
import IssueListView from './containers/IssueListView';
import IssueDetailView from './containers/IssueDetailView';

const BaseRouter = () => (
  <div>
    <Route exact path='/issues/' component={IssueListView} />
    <Route exact path='/issue/:issueID' component={IssueDetailView} />
  </div>
)

export default BaseRouter;