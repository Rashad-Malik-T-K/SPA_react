// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Add Link
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const testUser = { email: 'test@example.com', password: 'test123' };

//     if (email === testUser.email && password === testUser.password) {
//       localStorage.setItem('token', 'fake-jwt-token');
//       navigate('/Home');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//         <Link to="/forgot-password">Forgot Password?</Link> | <Link to="/register">Sign Up</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const testUser = { email: 'test@example.com', password: 'test123' };

//     if (email === testUser.email && password === testUser.password) {
//       localStorage.setItem('token', 'fake-jwt-token');
//       navigate('/dashboard'); // Use navigate instead of window.location
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//         <a href="/forgot-password">Forgot Password?</a> | <a href="/register">Sign Up</a>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Hardcoded test user
//     const testUser = { email: 'test@example.com', password: 'test123' };

//     if (email === testUser.email && password === testUser.password) {
//       // Simulate successful login with a fake token
//       localStorage.setItem('token', 'fake-jwt-token');
//       window.location.href = '/dashboard';
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//         <a href="/forgot-password">Forgot Password?</a> | <a href="/register">Sign Up</a>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       window.location.href = '/dashboard';
//     } catch (err) {
//       const errorMsg = err.response?.data?.error || 'Login failed';
//       setError(errorMsg);
//       console.log('Error Details:', err.response); // Log full response
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//         <a href="/forgot-password">Forgot Password?</a> | <a href="/register">Sign Up</a>
//       </form>
//     </div>
//   );
// };

// export default Login;
// src/Login.js
// ... existing code ...

// ... existing imports ...
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
  
      localStorage.setItem('token', token); // Store token to match dashboard check
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
        <a href="/forgot-password">Forgot Password?</a> | <a href="/register">Sign Up</a>
      </form>
    </div>
  );
}

export default Login;
