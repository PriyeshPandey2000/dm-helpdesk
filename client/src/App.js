import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ConnectFacebook from './components/ConnectFacebook';

function App() {
  return (
    <Router>
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
