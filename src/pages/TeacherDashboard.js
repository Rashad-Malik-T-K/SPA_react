import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Ensure the correct path to your firebase.js file
import { collection, getDocs } from 'firebase/firestore';
import './TeacherDashboard.css'; // Import the CSS file

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [studentReports, setStudentReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  useEffect(() => {
    const fetchStudentReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'studentReports'));
        const reports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudentReports(reports);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching student reports:', err.message);
        setLoading(false);
      }
    };

    fetchStudentReports();
  }, []);

  const handleBack = () => {
    navigate('/dashboard');
  };

  // Filter reports based on search term
  const filteredReports = studentReports.filter((report) =>
    report.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="teacher-dashboard-container">
      <h1 className="dashboard-title">Teacher Dashboard</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by student name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        style={{ marginBottom: '16px', padding: '8px', width: '250px' }}
      />

      {loading ? (
        <p className="loading-text">Loading student reports...</p>
      ) : filteredReports.length > 0 ? (
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Marks</th>
                <th>Attendance</th>
                <th>Assignments</th>
                <th>Behavior</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.studentName}</td>
                  <td>{report.course}</td>
                  <td>{report.marks}</td>
                  <td>{report.attendance}</td>
                  <td>{report.assignments}</td>
                  <td>{report.behavior}</td>
                  <td>{report.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-reports-text">No student reports found.</p>
      )}
      <button className="back-button" onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default TeacherDashboard;