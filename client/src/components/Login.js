import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // useNavigate hook for navigation
  axios.defaults.withCredentials = true;

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend for login
      const response = await axios.post('https://dm-helpdesk-o2havfro8-priyeshpandey2000s-projects.vercel.app/login', {
        email,
        password
      });

      // Handle the response as needed (e.g., store user token in state/context)
      console.log(response.data);

      // Redirect to the Facebook connect page on successful login
      history.push('/connect-facebook');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
