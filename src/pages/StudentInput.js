import React, { useState } from "react";
import "./input.css";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import axios from 'axios';

const initialState = {
  school: "",
  sex: "",
  age: "",
  address: "",
  famsize: "",
  Pstatus: "",
  Medu: "",
  Fedu: "",
  Mjob: "",
  Fjob: "",
  reason: "",
  guardian: "",
  traveltime: "",
  studytime: "",
  failures: "",
  schoolsup: "",
  famsup: "",
  paid: "",
  activities: "",
  nursery: "",
  higher: "",
  internet: "",
  romantic: "",
  famrel: "",
  freetime: "",
  goout: "",
  health: "",
  absences: "",
  G1: "",
  G2: ""
};

const StudentInput = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handlePredict = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://10.188.197.230:5000', formData);
      const prediction = response.data.prediction;
      navigate('/prediction', { state: { prediction } });
    } catch (err) {
      alert("Prediction failed: " + err.message);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        age: Number(formData.age),
        Medu: Number(formData.Medu),
        Fedu: Number(formData.Fedu),
        traveltime: Number(formData.traveltime),
        studytime: Number(formData.studytime),
        failures: Number(formData.failures),
        famrel: Number(formData.famrel),
        freetime: Number(formData.freetime),
        goout: Number(formData.goout),
        health: Number(formData.health),
        absences: Number(formData.absences),
        G1: Number(formData.G1),
        G2: Number(formData.G2)
      };
      await addDoc(collection(db, "students"), data);
      alert("Student data submitted!");
      setFormData(initialState);
      navigate('/dashboard');
    } catch (err) {
      console.error("Error details:", err);
      alert("Error submitting data");
    }
  };

  return (
    <div className="input-container" style={{backgroundColor: "#2c3e50"}}>
    <form className="student-form" style={{marginTop: "0px"}} onSubmit={handleSubmit}>
      <h2>Student Information Form</h2>

      {/* Personal Information Section */}
      <div className="section">
        <h3 className="section-title">Personal Information</h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="school">School</label>
            <select id="school" name="school" value={formData.school} onChange={handleChange} required>
              <option value="">Select School</option>
              <option value="GP">Gabriel Pereira (GP)</option>
              <option value="MS">Mousinho da Silveira (MS)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sex">Gender</label>
            <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form-group">
          <label htmlFor="age">Age (10-25)</label>
            <select id="age" name="age" value={formData.age} onChange={handleChange} required>
            <option value="">Select Age</option>
            {Array.from({ length: 16 }, (_, i) => (
            <option key={i + 10} value={i + 10}>{i + 10}</option>
            ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <select id="address" name="address" value={formData.address} onChange={handleChange} required>
              <option value="">Select Address</option>
              <option value="U">Urban</option>
              <option value="R">Rural</option>
            </select>
          </div>
        </div>
      </div>

      {/* Family Information Section */}
      <div className="section">
        <h3 className="section-title">Family Information</h3>
        <div className="form-gridMay">
          <div className="form-group">
            <label htmlFor="famsize">Family Size</label>
            <select id="famsize" name="famsize" value={formData.famsize} onChange={handleChange} required>
              <option value="">Select Family Size</option>
              <option value="LE3">Less or equal to 3</option>
              <option value="GT3">Greater than 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Pstatus">Parent Status</label>
            <select id="Pstatus" name="Pstatus" value={formData.Pstatus} onChange={handleChange} required>
              <option value="">Select Parent Status</option>
              <option value="T">Together</option>
              <option value="A">Apart</option>
            </select>
          </div>
          <div className="form-group">
             <label htmlFor="Medu">Mother's Education (0-4)</label>
             <select id="Medu" name="Medu" value={formData.Medu} onChange={handleChange} required>
               <option value="">Select Mother's Education</option>
               <option value="0">0 - None</option>
               <option value="1">1 - Primary</option>
               <option value="2">2 - Middle School</option>
               <option value="3">3 - High School</option>
               <option value="4">4 - Higher Education</option>
             </select>
          </div>
          <div className="form-group">
            <label htmlFor="Fedu">Father's Education (0-4)</label>
            <select id="Fedu" name="Fedu" value={formData.Fedu} onChange={handleChange} required>
              <option value="">Select Father's Education</option>
              <option value="0">0 - None</option>
              <option value="1">1 - Primary</option>
              <option value="2">2 - Middle School</option>
              <option value="3">3 - High School</option>
              <option value="4">4 - Higher Education</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Mjob">Mother's Job</label>
            <select id="Mjob" name="Mjob" value={formData.Mjob} onChange={handleChange} required>
              <option value="">Select Mother's Job</option>
              <option value="teacher">Teacher</option>
              <option value="health">Health</option>
              <option value="services">Services</option>
              <option value="at_home">At home</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Fjob">Father's Job</label>
            <select id="Fjob" name="Fjob" value={formData.Fjob} onChange={handleChange} required>
              <option value="">Select Father's Job</option>
              <option value="teacher">Teacher</option>
              <option value="health">Health</option>
              <option value="services">Services</option>
              <option value="at_home">At home</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guardian">Guardian</label>
            <select id="guardian" name="guardian" value={formData.guardian} onChange={handleChange} required>
              <option value="">Select Guardian</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
           <label htmlFor="famrel">Family Relationship (1-5)</label>
           <select id="famrel" name="famrel" value={formData.famrel} onChange={handleChange} required>
             <option value="">Select Family Relationship</option>
             <option value="1">1 - Very Bad</option>
             <option value="2">2 - Bad</option>
             <option value="3">3 - Neutral</option>
             <option value="4">4 - Good</option>
             <option value="5">5 - Very Good</option>
           </select>
          </div>
        </div>
      </div>

      {/* Academic Information Section */}
      <div className="section">
        <h3 className="section-title">Academic Information</h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="reason">Reason for School Choice</label>
            <select id="reason" name="reason" value={formData.reason} onChange={handleChange} required>
              <option value="">Select Reason</option>
              <option value="home">Home</option>
              <option value="reputation">Reputation</option>
              <option value="course">Course</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="traveltime">Travel Time (1-4)</label>
            <select id="traveltime" name="traveltime" value={formData.traveltime} onChange={handleChange} required>
              <option value="">Select Travel Time</option>
              <option value="1">1 - 0-15 min</option>
              <option value="2">2 - 15-30 min</option>
              <option value="3">3 - 30-60 min</option>
              <option value="4">4 - 60 min</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="studytime">Study Time (1-4)</label>
              <select id="studytime" name="studytime" value={formData.studytime} onChange={handleChange} required>
                <option value="">Select Study Time</option>
                <option value="1">1 - 0-2 hours</option>
                <option value="2">2 - 2-5 hours</option>
                <option value="3">3 - 5-10 hours</option>
                <option value="4">4 - Above 10 hours</option>
              </select>
          </div>
          <div className="form-group">
            <label htmlFor="failures">Past Failures (0-4)</label>
             <select id="failures" name="failures" value={formData.failures} onChange={handleChange} required>
               <option value="">Select Past Failures</option>
               <option value="0">0 - None</option>
               <option value="1">1 - One</option>
               <option value="2">2 - Two</option>
               <option value="3">3 - Three</option>
               <option value="4">4 - Four or more</option>
             </select>
          </div>
          <div className="form-group">
            <label htmlFor="schoolsup">School Support</label>
            <select id="schoolsup" name="schoolsup" value={formData.schoolsup} onChange={handleChange} required>
              <option value="">School Support</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="famsup">Family Support</label>
            <select id="famsup" name="famsup" value={formData.famsup} onChange={handleChange} required>
              <option value="">Family Support</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="paid">Paid Classes</label>
            <select id="paid" name="paid" value={formData.paid} onChange={handleChange} required>
              <option value="">Paid Classes</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="higher">Wants Higher Education</label>
            <select id="higher" name="higher" value={formData.higher} onChange={handleChange} required>
              <option value="">Wants Higher Education</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="G1">Test 1 Score (0-20)</label>
            <select id="G1" name="G1" value={formData.G1} onChange={handleChange} required>
              <option value="">Select Test 1 Score</option>
                {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>{i}</option>
               ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="G2">Test 2 Score (0-20)</label>
            <select id="G2" name="G2" value={formData.G2} onChange={handleChange} required>
              <option value="">Select Test 2 Score</option>
              {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>{i}</option>
              ))}
            </select>
        </div>
        </div>
      </div>

      {/* Lifestyle Information Section */}
      <div className="section">
        <h3 className="section-title">Lifestyle Information</h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="activities">Extracurricular Activities</label>
            <select id="activities" name="activities" value={formData.activities} onChange={handleChange} required>
              <option value="">Extracurricular Activities</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="nursery">Attended Nursery School</label>
            <select id="nursery" name="nursery" value={formData.nursery} onChange={handleChange} required>
              <option value="">Attended Nursery School</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="internet">Internet Access</label>
            <select id="internet" name="internet" value={formData.internet} onChange={handleChange} required>
              <option value="">Internet Access</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="romantic">In a Romantic Relationship</label>
            <select id="romantic" name="romantic" value={formData.romantic} onChange={handleChange} required>
              <option value="">In a Romantic Relationship</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="freetime">Free Time (1-5)</label>
            <select id="freetime" name="freetime" value={formData.freetime} onChange={handleChange} required>
              <option value="">Select Free Time</option>
              <option value="1">1 - Very Low</option>
              <option value="2">2 - Low</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - High</option>
              <option value="5">5 - Very High</option>
           </select>
          </div>

          <div className="form-group">
             <label htmlFor="goout">Going Out Frequency (1-5)</label>
             <select id="goout" name="goout" value={formData.goout} onChange={handleChange} required>
                <option value="">Select Going Out Frequency</option>
                <option value="1">1 - Very Rarely</option>
                <option value="2">2 - Rarely</option>
                <option value="3">3 - Sometimes</option>
                <option value="4">4 - Often</option>
                <option value="5">5 - Very Often</option>
                </select>
          </div>

          <div className="form-group">
            <label htmlFor="health">Health Status (1-5)</label>
            <select id="health" name="health" value={formData.health} onChange={handleChange} required>
              <option value="">Select Health Status</option>
              <option value="1">1 - Very Bad</option>
              <option value="2">2 - Bad</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Very Good</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="absences">Absences (0-100)</label>
            <select id="absences" name="absences" value={formData.absences} onChange={handleChange} required>
              <option value="">Select Absences</option>
              {Array.from({ length: 101 }, (_, i) => (
              <option key={i} value={i}>{i}</option>
              ))}
            </select>
        </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button type="button" onClick={handlePredict}>Predict</button>
        <button type="submit">Save to Dashboard</button>
        <button type="button" onClick={handleBack}>Back to Dashboard</button>
      </div>
    </form>
    </div>
  );
};

export default StudentInput;