import React, { useState } from 'react';
import  UsersData  from '../userData';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = UsersData.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setSuccess(true);
      setError('');
      //to hold state till loging out
      localStorage.setItem('username', username);
      // Navigate to the WelcomePage with the username
      navigate('/home', { state: { username } });
      // Handle successful login
    } else {
      setSuccess(false);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Login successful!</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
