import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Ensure the correct path to your firebase.js file
import { collection, addDoc } from 'firebase/firestore';
import './TeacherInput.css'; // Import the CSS file

function TeacherInput() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '',
    course: '',
    marks: '',
    attendance: '',
    assignments: '',
    behavior: '',
    feedback: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      // Add the teacher's input to Firestore
      await addDoc(collection(db, 'studentReports'), formData);
      setSuccess('Student report submitted successfully!');
      setFormData({
        studentName: '',
        course: '',
        marks: '',
        attendance: '',
        assignments: '',
        behavior: '',
        feedback: '',
      });
    } catch (err) {
      setError('Failed to submit the report. Please try again.');
      console.error('Error adding document:', err);
    }
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="teacher-input-container">
      <h2 className="title">Student Details By Teacher</h2>
      <form className="teacher-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          required
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          required
        />
        <input
          type="number"
          name="marks"
          value={formData.marks}
          onChange={handleChange}
          placeholder="Marks"
          required
        />
        <input
          type="text"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          placeholder="Attendance (e.g., 90%)"
          required
        />
        <textarea
          name="assignments"
          value={formData.assignments}
          onChange={handleChange}
          placeholder="Assignments (e.g., Completed 5/6)"
          required
        />
        <textarea
          name="behavior"
          value={formData.behavior}
          onChange={handleChange}
          placeholder="Behavior Report"
          required
        />
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Student Feedback"
          required
        />
        <button type="submit" className="submit-button">Submit Report</button>
      </form>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
      <button className="back-button" onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
}

export default TeacherInput;