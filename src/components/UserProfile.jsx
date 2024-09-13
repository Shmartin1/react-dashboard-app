// src/components/UserProfile.jsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { user, login, logout } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message

  const staticPassword = 'password123'; // Static password for validation

  const handleLogin = () => {
    // Validate password
    if (password === staticPassword) {
      login(username); // Proceed with login if password is correct
      setUsername('');
      setPassword('');
      setError(''); // Clear any previous errors
    } else {
      setError('Incorrect password'); // Show error message if password is wrong
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
