import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername('');
    }
  }, []);
    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            <Link to="/about">About</Link>
            <Link to={`/user/${username}`}>{username}</Link>

           
        </nav>
    )
}
