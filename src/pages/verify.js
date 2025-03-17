import React, { useState } from 'react';
import axios from 'axios';

const Verify = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/verify', { code });
      setMessage('Verification successful');
      window.location.href = '/dashboard';
    } catch (err) {
      setMessage('Invalid code');
    }
  };

  return (
    <div className="login-container">
      <h2>Verify Email</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" required />
        <button type="submit">Verify</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Verify;