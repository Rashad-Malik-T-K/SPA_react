import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Profile content goes here.</p>
      <button onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default Profile;

// import React from 'react';

// const Profile = () => {
//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Email: user@example.com</p> {/* Fetch from API */}
//       <p>Name: John Doe</p>
//       <a href="/dashboard">Back to Dashboard</a>
//     </div>
//   );
// };

// export default Profile;