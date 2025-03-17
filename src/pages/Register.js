import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { email, password });
      window.location.href = '/login';
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        <Link to="/login">Already have an account?</Link> 
        
      </form>
    </div>
  );
};

export default Register;

// import React from 'react';

// const Register = () => {
//   return (
//     <div className="login-container">
//       <h2>Register</h2>
//       <p>For this demo, use the test account:</p>
//       <p>Email: test@example.com</p>
//       <p>Password: test123</p>
//       <a href="/login">Go to Login</a>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/register', { email, password });
//       window.location.href = '/login';
//     } catch (err) {
//       setError('Registration failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Sign Up</button>
//         {error && <p className="error">{error}</p>}
//         <a href="/login">Already have an account?</a>
//       </form>
//     </div>
//   );
// };

// export default Register;