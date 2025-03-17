import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>This is a blank Teacher Dashboard page.</p>
      <button onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default TeacherDashboard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const TeacherDashboard = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate('/dashboard'); // Back to main Dashboard
//   };

//   return (
//     <div>
//       <h1>Teacher Dashboard</h1>
//       <p>This is a blank Teacher Dashboard page.</p>
//       <button onClick={handleBack}>Back to Dashboard</button>
//     </div>
//   );
// };

// export default TeacherDashboard;