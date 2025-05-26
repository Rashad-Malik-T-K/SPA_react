import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../firebase'; // Adjust the path to your firebase.js config

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Reset link sent to your email');
    } catch (error) {
      setMessage('Error sending reset link: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Send Reset Link</button>
        {message && <p>{message}</p>}
        <Link to="/login">Back to Login</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;