import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './components/Login';
import Register from './components/Register';
import ConnectFacebook from './components/ConnectFacebook';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/connect-facebook" component={ConnectFacebook} />
          {/* Add more routes for other components/pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
