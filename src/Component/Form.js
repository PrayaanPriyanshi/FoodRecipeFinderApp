import React, { useState } from 'react';
import './Form.css';

const LoginForm = ({ onLogin }) => {

  // State variables for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle changes in the username input field
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
// Handle changes in the password input field
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
// Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

     // Check if username and password are correct
    if (username === 'Man' && password === '000') {
      onLogin(username);
      setErrorMessage('');
    } else {
      // Display error message for incorrect username or password
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <div className='back'>
    <div className="login-form-container">
    
        <h1 className='name'><u>Food Recipe Finder</u></h1>
    <br></br><br></br><br></br>
    <h2 className='log'>Login</h2><br></br>
      <form onSubmit={handleSubmit}>
        
        <div>
          <input
            className="form-input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <input
            className="form-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <br />
        <button className="form-button" type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
