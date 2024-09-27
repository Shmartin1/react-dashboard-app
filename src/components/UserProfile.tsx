import React, { useContext, useState } from 'react';
import { UserContext, UserContextType } from '../context/UserContext';

const UserProfile: React.FC = () => {
  const { user, login, logout } = useContext(UserContext) as UserContextType;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const tempPass = 'password';

  const handleLogin = () => {
    if (password === tempPass) {
      login(username);
      // clear inputs
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p style={margin}>Welcome, {user.username}</p>
          <button style={margin} onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <div>
            <label>
              Username:
              <input 
                type="text"
                style={{margin: '5px'}}
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </label>
          </div>
          <div>
            <label>
              Password:  
              <input 
                type="password"
                style={{margin: '10px'}}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

const margin = {
  margin: '10px',
};

export default UserProfile;