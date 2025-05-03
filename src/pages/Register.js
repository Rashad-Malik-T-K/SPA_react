import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Ensure the correct path to your firebase.js file
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase'; // Ensure Firestore is imported
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [name, setName] = useState(''); // State for the user's name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is 'student'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the user's name, email, and role to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        role: role, // Save the selected role
      });

      alert('Registration successful!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.message); // Display error message if registration fails
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={(e) => setRole(e.target.value)}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={role === 'teacher'}
              onChange={(e) => setRole(e.target.value)}
            />
            Teacher
          </label>
          {/* <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === 'admin'}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label> */}
        </div>
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        <Link to="/login">Already have an account?</Link>
      </form>
    </div>
  );
};

export default Register;