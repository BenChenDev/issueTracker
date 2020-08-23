import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';

import BaseRouter from './routes';
import CustomLayout from './containers/Layout';
import * as actions from './store/actions/auth';

class App extends Component{

  componentDidMount() {
    //every thie app mounted, run tryAutoSignUp
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router >
          <CustomLayout {...this.props}>
            <BaseRouter/>
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

//maping the state to prop of the app
const mapStateToProps = state => {
  return {
    isAuthenticated: (state.token !== null) && (state.token !== undefined)
  }
}

//methods that need to be pushed into the props of the app
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => {
      dispatch(actions.authCheckState());
    }
  }
}

//connect the mapped state with this App
export default connect(mapStateToProps, mapDispatchToProps)(App);
