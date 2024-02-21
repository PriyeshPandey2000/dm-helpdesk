import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ConnectFacebook from './components/ConnectFacebook';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/connect-facebook" element={<ConnectFacebook />}/>
          {/* Add more routes for other components/pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
