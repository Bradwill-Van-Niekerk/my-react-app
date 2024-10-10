import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Components/Nav';

const WelcomePage = () => {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };

  return (
    <div>
         <Nav/>
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default WelcomePage;
