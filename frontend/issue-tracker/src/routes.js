import React from 'react';
import {Route} from 'react-router-dom';
import IssueListView from './containers/IssueListView';
import IssueDetailView from './containers/IssueDetailView';
import LoginView from './containers/LoginView';
import SignupView from './containers/SignupView';

const BaseRouter = () => (
  <div>
    <Route exact path='/issues/' component={IssueListView} />
    <Route exact path='/issue/:issueID' component={IssueDetailView} />
    <Route exact path='/login/' component={LoginView} />
    <Route exact path='/signup/' component={SignupView} />
  </div>
)

export default BaseRouter;