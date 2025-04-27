import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [username, setUsername] = useState('User');

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    // You would typically fetch user data here
    // For now, we'll just use a placeholder
    // setUsername('John Doe');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
      // Back to Home button 
  const handleBack = () => {
    navigate('/Home'); // Navigate to the Home page
  };

  // Simple icon components using HTML/CSS
  const IconUser = () => <span className="icon">👤</span>;
  const IconSettings = () => <span className="icon">⚙️</span>;
  const IconBook = () => <span className="icon">📚</span>;
  const IconUsers = () => <span className="icon">👥</span>;
  const IconLayout = () => <span className="icon">📊</span>;
  const IconLogout = () => <span className="icon">🚪</span>;

  const menuItems = [
    { name: 'Dashboard', icon: <IconLayout />, link: '/dashboard', id: 'dashboard' },
    { name: 'Profile', icon: <IconUser />, link: '/profile', id: 'profile' },
    { name: 'Student Input', icon: <IconBook />, link: '/Student-input', id: 'student-input' },
    { name: 'Teacher Input', icon: <IconUsers />, link: '/Teacher-input', id: 'teacher-input' },
    { name: 'Student Dashboard', icon: <IconBook />, link: '/student-dashboard', id: 'student-dashboard' },
    { name: 'Teacher Dashboard', icon: <IconUsers />, link: '/teacher-dashboard', id: 'teacher-dashboard' },
    { name: 'Settings', icon: <IconSettings />, link: '/settings', id: 'settings' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Student Portal</h2>
        </div>
        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.name}</span>
            </Link>
          ))}
          <button className="sidebar-item logout" onClick={handleLogout}>
            <span className="sidebar-icon"><IconLogout /></span>
            <span className="sidebar-text">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <div className="breadcrumb">Dashboard</div>
          {/* <div className="user-info">
            <span className="welcome-text">Welcome, {username}</span>
            <div className="user-avatar">
              <IconUser />
            </div>
          </div> */}
          <div>
            <button onClick={handleBack}>Back to Home</button>
            </div>
        </div>

        <div className="dashboard-content">
          <div className="welcome-card">
            <h1>Welcome to Your Dashboard</h1>
            <p>Access all your educational tools and resources from this central interface.</p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Dashboard;