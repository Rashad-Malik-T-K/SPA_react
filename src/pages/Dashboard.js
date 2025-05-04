import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase'; // Ensure Firestore is imported
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [username, setUsername] = useState('User');
  const [role, setRole] = useState(''); // State to store the user's role
  const [loading, setLoading] = useState(true); // State to track loading

  <div className="top-bar">
  <div className="breadcrumb">Dashboard</div>
  <div>
    <span className="username">Welcome, {username}</span>
    <button onClick={handleBack}>Back to Home</button>
  </div>
</div>

  useEffect(() => {
    // Check authentication and fetch user data
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUsername(userData.name || 'User');
            setRole(userData.role || ''); // Set the user's role
          }
        } catch (err) {
          console.error('Error fetching user data:', err.message);
        }
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }
      setLoading(false); // Set loading to false after fetching data
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

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

  // Define all menu items
  const allMenuItems = [
    { name: 'Dashboard', icon: <IconLayout />, link: '/dashboard', id: 'dashboard' },
    { name: 'Profile', icon: <IconUser />, link: '/profile', id: 'profile' },
    { name: 'Student Input', icon: <IconBook />, link: '/Student-input', id: 'student-input' },
    { name: 'Teacher Input', icon: <IconUsers />, link: '/Teacher-input', id: 'teacher-input' },
    { name: 'Student Dashboard', icon: <IconBook />, link: '/student-dashboard', id: 'student-dashboard' },
    { name: 'Teacher Dashboard', icon: <IconUsers />, link: '/teacher-dashboard', id: 'teacher-dashboard' },
    { name: 'Settings', icon: <IconSettings />, link: '/settings', id: 'settings' },
  ];

  // Filter menu items based on role
  const menuItems = role === 'admin'
  ? allMenuItems // Admin can see all menu items
  : role === 'teacher'
  ? allMenuItems.filter(item =>
      ['Teacher Input', 'Student Dashboard', 'Teacher Dashboard','Settings', 'Profile'].includes(item.name)
    )
  : allMenuItems.filter(item =>
      item.name !== 'Teacher Input' // Exclude 'Teacher Input' for non-teacher roles
    );

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

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
          <div>
            <button onClick={handleBack}>Back to Home</button>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="welcome-card">
            <h1>Welcome to the Student Performance Analytics </h1>
            <p>Powered by machine learning, this platform provides real-time insights to track student progress and support data-driven decisions for academic success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;