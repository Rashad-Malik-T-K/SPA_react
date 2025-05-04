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
        <iframe
          title="Student Performance Dashboard"
          width="1250"
          height="600"
          src="https://lookerstudio.google.com/embed/reporting/1a6441d8-d592-420a-835a-d886f4f2405a/page/WIrIF"
          frameBorder="0"
        ></iframe>
      </div>
      <button className="back-button" onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default StudentDashboard;