import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Ensure the correct path to your firebase.js file
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // State to store Firestore user data

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.error('No user data found in Firestore');
        }
      } else {
        // If no user is logged in, redirect to login page
        navigate('/login');
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      {user ? (
        <div className="profile-card">
          {userData && <p><strong>Name:</strong> {userData.name}</p>}
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UID:</strong> {user.uid}</p>
        </div>
      ) : (
        <p className="loading-text">Loading user information...</p>
      )}
      <button className="back-button" onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default Profile;