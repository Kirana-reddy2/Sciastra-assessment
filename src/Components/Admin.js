import React, { useState } from 'react';
import './Admin.css';

const Admin = ({ onClose, onAuthSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdminChecked, setIsAdminChecked] = useState(false); // Track if the user is checking for admin status

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check for demo purposes
    if (username === 'sciastra' && password === 'sciastra123') {
      onAuthSuccess(); // Call the success handler to open the blog
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!isAdminChecked ? (
          <>
            <h2>Are you an admin?</h2>
            <p>Please confirm your admin status</p>
            <button onClick={() => setIsAdminChecked(true)} style={{backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    fontSize: '1.2rem',
    padding: '0.2rem',
    marginTop: '1rem',
    marginRight: '1rem',}}>Yes</button>
            <button onClick={onClose} style={{ backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    fontSize: '1.2rem',
    padding: '0.2rem',
    marginTop: '1rem',}}>No</button>
          </>
        ) : (
          <>
            <h2 style={{fontSize:"1.2rem"}}>Admin Authentication</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label><br></br>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              {error && <p className="error">{error}</p>}<br></br>
              <button type="submit" style={{backgroundColor:"orange", color: 'white',
    border: 'none',
    fontSize: '1rem',
    padding: '0.2rem',
    marginTop: '1rem',
    marginRight: '1rem',
    marginLeft:"2rem"}}>Login</button>
              <button type="button" onClick={onClose} style={{backgroundColor:"orange", color: 'white',
    border: 'none',
    fontSize: '1rem',
    padding: '0.2rem',
    marginTop: '1rem',
    }}>
                Cancel
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
