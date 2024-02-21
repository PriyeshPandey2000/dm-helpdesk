import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = () => {
  const responseFacebook = (response) => {
    console.log(response);
    // Handle the response, send it to the server, etc.
  };

  return (
    <FacebookLogin
      appId="1466308294235050"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};

export default FacebookLoginButton;
