import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css'; // Import Link

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='dashboard-container'>
      <h1>Welcome to Dashboard</h1>
      <p>Main interface after login</p>
      <nav>
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/settings">Settings</Link> |{' '}
        <Link to="/student-dashboard">Student Dashboard</Link> |{' '}
        <Link to="/teacher-dashboard">Teacher Dashboard</Link> |{' '}
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <h1>Welcome to Dashboard</h1>
//       <p>Main interface after login</p>
//       <nav>
//         <a href="/profile">Profile</a> |{' '}
//         <a href="/settings">Settings</a> |{' '}
//         <a href="/student-dashboard">Student Dashboard</a> |{' '}
//         <a href="/teacher-dashboard">Teacher Dashboard</a> |{' '}
//         <button onClick={handleLogout}>Logout</button>
//       </nav>
//     </div>
//   );
// };

// export default Dashboard;