import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Ensure the correct path to your firebase.js file
import { collection, addDoc } from 'firebase/firestore';
import './TeacherInput.css'; // Import the CSS file

const behaviorOptions = [
  { value: 'Excellent', label: '🌟 Excellent' },
  { value: 'Good', label: '👍 Good' },
  { value: 'Average', label: '👌 Average' },
  { value: 'Needs Improvement', label: '⚠️ Needs Improvement' },
  { value: 'Poor', label: '❌ Poor' }
];

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
    const { name, value } = e.target;
    // Restrict marks, attendance to 0-100, assignments to 0-6
    if (['marks', 'attendance'].includes(name)) {
      if (value === '' || (/^\d{1,3}$/.test(value) && Number(value) <= 100)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === 'assignments') {
      if (value === '' || (/^\d{1,1}$/.test(value) && Number(value) <= 6)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Validation
    if (
      !formData.studentName ||
      !formData.course ||
      formData.marks === '' ||
      formData.attendance === '' ||
      formData.assignments === '' ||
      !formData.behavior
    ) {
      setError('Please fill all required fields.');
      return;
    }
    if (
      Number(formData.marks) < 0 || Number(formData.marks) > 100 ||
      Number(formData.attendance) < 0 || Number(formData.attendance) > 100 ||
      Number(formData.assignments) < 0 || Number(formData.assignments) > 6
    ) {
      setError('Marks and Attendance must be between 0 and 100. Assignments must be between 0 and 6.');
      return;
    }
    try {
      await addDoc(collection(db, 'studentReports'), {
        ...formData,
        marks: Number(formData.marks),
        attendance: Number(formData.attendance),
        assignments: Number(formData.assignments),
      });
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
          className="input-box"
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          required
          className="input-box"
        />
        <input
          type="number"
          name="marks"
          value={formData.marks}
          onChange={handleChange}
          placeholder="Marks (%)"
          min="0"
          max="100"
          required
          className="input-box"
        />
        <input
          type="number"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          placeholder="Attendance (%)"
          min="0"
          max="100"
          required
          className="input-box"
        />
        <input
          type="number"
          name="assignments"
          value={formData.assignments}
          onChange={handleChange}
          placeholder="Assignments (0-6)"
          min="0"
          max="6"
          required
          className="input-box"
        />
        <select
          id="behavior"
          name="behavior"
          value={formData.behavior}
          onChange={handleChange}
          required
          className="input-box"
        >
          <option value="" disabled>Select Behavior</option>
          {behaviorOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Student Feedback"
          required
          className="input-box"
          style={{ minHeight: '60px' }}
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