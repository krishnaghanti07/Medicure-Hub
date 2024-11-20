import React, { useState } from 'react';
import './App.css';

const LoginSignup = ({ onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    setError(null); // Reset error when toggling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Known valid credentials for ReqRes mock API (for testing)
    const validTestEmail = "eve.holt@reqres.in";
    
    const apiEndpoint = isLoginMode
      ? 'https://reqres.in/api/login'
      : 'https://reqres.in/api/register';

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      onLogin(data.token || data); // Trigger login with token
      setError(null); // Clear any previous errors
    } else {
      // If using invalid credentials, show an error
      if (email !== validTestEmail) {
        setError('Only the test account works: eve.holt@reqres.in');
      } else {
        setError('Authentication failed: ' + data.error);
      }
    }
  };

  return (
    <div className="login-signup-overlay">
      <div className="login-signup-container">
        <h1 className='formHead2'>{isLoginMode ? 'Log-in' : 'Sign-up'}</h1>
        <form onSubmit={handleSubmit} className="login-signup-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {isLoginMode ? 'Login' : 'Signup'}
          </button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}

        <button onClick={toggleMode} className="toggle-btn">
          {isLoginMode ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
