import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router} from 'react-router-dom';

import BaseRouter from './routes';
import CustomLayout from './containers/Layout';

const App = () => {
  return (
    <div className="App">
      <Router >
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
