import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const ConnectFacebook = () => {
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
    // Handle the response, send it to the server, etc.
  };

  const handleBack = () => {
    // Redirect back to the login page or any other appropriate page
    navigate('/login'); // Use navigate('/login') instead of navigate.push('/login')
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



