import React from 'react';
import { useNavigate } from 'react-router-dom';
const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh', 
      textAlign: 'center'
    }}>
      <h1>Student Dashboard</h1>
      <p>This is a blank Student Dashboard page.</p>
      <iframe 
        width="600" 
        height="450" 
        src="https://lookerstudio.google.com/embed/reporting/0f4d75f4-a19f-4a19-b7e7-1708d7d70d83/page/NuMIF" 
        frameBorder="0">
      </iframe>
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