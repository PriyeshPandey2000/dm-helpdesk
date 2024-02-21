// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Facebook Page Integration Dashboard</h1>
      <Link to="/manage-page">
        <button>Delete Integration</button>
      </Link>
      <Link to="/reply-messages">
        <button>Reply to Messages</button>
      </Link>
    </div>
  );
}

export default Dashboard;
