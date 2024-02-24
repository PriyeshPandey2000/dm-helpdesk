import React from 'react';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

const ConnectFacebook = () => {
  const history = useHistory();

  const responseFacebook = (response) => {
    console.log(response);
    // Handle the response, send it to the server, etc.
  };

  const handleBack = () => {
    // Redirect back to the login page or any other appropriate page
    history.push('/login');
  };

  return (
    <div>
      <h2>Connect with Facebook</h2>
      <p>Click the button below to connect your Facebook account.</p>
      <FacebookLogin
        appId="1466308294235050"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />

      <br />

      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ConnectFacebook;
