import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css'; // Import the CSS file

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="student-dashboard-container">
      <h1 className="dashboard-title">Student Dashboard</h1>
      {/* <p className="dashboard-description">View your performance and insights below:</p> */}
      <div className="dashboard-iframe-container">
        <iframe title="Student Performance Dashboard" width="1250" height="600" src="https://lookerstudio.google.com/embed/reporting/575018ce-2436-42a0-9d2f-6b8ba6d508b8/page/n7MMF"   allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
      </div>
      <button className="back-button" onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default StudentDashboard;