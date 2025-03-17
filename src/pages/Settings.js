import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Settings page content goes here.</p>
      <button onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default Settings;

// import React from 'react';

// const Settings = () => {
//   return (
//     <div>
//       <h2>Settings</h2>
//       <form>
//         <input type="text" placeholder="Change Name" />
//         <input type="password" placeholder="New Password" />
//         <button>Save Changes</button>
//       </form>
//       <a href="/dashboard">Back to Dashboard</a>
//     </div>
//   );
// };

// export default Settings;