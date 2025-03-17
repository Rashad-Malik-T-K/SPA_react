import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>This is a blank Student Dashboard page.</p>
      <button onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default StudentDashboard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const StudentDashboard = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate('/dashboard'); // Back to main Dashboard
//   };

//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//       <p>This is a blank Student Dashboard page.</p>
//       <button onClick={handleBack}>Back to Dashboard</button>
//     </div>
//   );
// };

// export default StudentDashboard;