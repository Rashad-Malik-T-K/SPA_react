import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock response since there's no backend on Netlify
    if (email === 'test@example.com') {
      setMessage('Reset link sent to your email (demo only)');
    } else {
      setMessage('Email not found (use test@example.com)');
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
        <Link to="/login">Back to Login</Link> {/* Use Link instead of <a> */}
      </form>
    </div>
  );
};

export default ForgotPassword;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="login-container">
//       <h2>Forgot Password</h2>
//       <p>For this demo, use test@example.com / test123</p>
//       <button onClick={handleBack}>Back to Login</button>
//     </div>
//   );
// };

// export default ForgotPassword;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/forgot-password', { email });
//       setMessage('Reset link sent to your email');
//     } catch (err) {
//       setMessage('Error sending reset link');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <button type="submit">Send Reset Link</button>
//         {message && <p>{message}</p>}
//         <a href="/login">Back to Login</a>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;