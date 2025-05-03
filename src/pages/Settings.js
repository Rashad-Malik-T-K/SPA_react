import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Ensure the correct path to your firebase.js file
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import './Settings.css'; // Import the CSS file

const Settings = () => {
  const navigate = useNavigate();
  const [currentName, setCurrentName] = useState('');
  const [newName, setNewName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setCurrentName(userDoc.data().name);
          }
        } catch (err) {
          console.error('Error fetching user data:', err.message);
        }
      } else {
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleNameChange = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const user = auth.currentUser;

    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, { name: newName });
        setSuccess('Name updated successfully!');
        setCurrentName(newName);
        setNewName('');
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError('No user is currently logged in.');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const user = auth.currentUser;

    if (user) {
      try {
        const email = user.email;
        await signInWithEmailAndPassword(auth, email, currentPassword);
        await updatePassword(user, newPassword);
        setSuccess('Password updated successfully!');
        setCurrentPassword('');
        setNewPassword('');
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError('No user is currently logged in.');
    }
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      {/* Update Name Section */}
      <form className="settings-form" onSubmit={handleNameChange}>
        <h3>Update Name</h3>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder={currentName || 'Enter new name'}
          required
        />
        <button type="submit" className="settings-button">Update Name</button>
      </form>

      {/* Update Password Section */}
      <form className="settings-form" onSubmit={handlePasswordChange}>
        <h3>Change Password</h3>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Enter current password"
          required
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <button type="submit" className="settings-button">Change Password</button>
      </form>

      {/* Feedback Messages */}
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <button className="back-button" onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default Settings;