import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import StudentDashboard from './pages/StudentDashboard'; 
import TeacherDashboard from './pages/TeacherDashboard'; // New import
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';
import Contact from './pages/Contact';
import StudentInput from './pages/StudentInput';
import TeacherInput from './pages/TeacherInput'; // New import
import Prediction from './pages/Prediction';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/student-input" element={<StudentInput />} />
        <Route path="/teacher-input" element={<TeacherInput />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default App;