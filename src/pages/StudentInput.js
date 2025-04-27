import React from "react";
import "./input.css"; 
import { useNavigate } from 'react-router-dom'; 

// create this CSS file


const StudentInput = () => {
  const navigate = useNavigate(); // <-- Move useNavigate inside the component

  const handleBack = (e) => {
    e.preventDefault(); // Prevent form submit when clicking back
    navigate('/dashboard');
  };

  return (
    <form className="student-form">
      <h2>Student Information Form</h2>

      <select name="school">
        <option value="">Select School</option>
        <option value="GP">Gabriel Pereira (GP)</option>
        <option value="MS">Mousinho da Silveira (MS)</option>
      </select>
      <select name="sex">
        <option value="">Select Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input type="number" name="age" placeholder="Age" min="10" max="25"/>
      <select name="address">
        <option value="">Select Address</option>
        <option value="U">Urban</option>
        <option value="R">Rural</option>
      </select>
      <select name="famsize">
        <option value="">Select Family Size</option>
        <option value="LE3">Less or equal to 3</option>
        <option value="GT3">Greater than 3</option>
      </select>
      <select name="Pstatus">
        <option value="">Select Parent Status</option>
        <option value="T">Together</option>
        <option value="A">Apart</option>
      </select>
      <input type="number" name="Medu" placeholder="Mother's Education" />
      <input type="number" name="Fedu" placeholder="Father's Education" />
      <input type="text" name="Mjob" placeholder="Mother's Job" />
      <input type="text" name="Fjob" placeholder="Father's Job" />
      <input type="text" name="reason" placeholder="Reason" />
      <input type="text" name="guardian" placeholder="Guardian" />
      <input type="number" name="traveltime" placeholder="Travel Time" />
      <input type="number" name="studytime" placeholder="Study Time" />
      <input type="number" name="failures" placeholder="Failures" />
      <select name="schoolsup">
        <option value="">School Support</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="famsup">
        <option value="">Family Support</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select name="paid">
        <option value="">Paid Classes</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select name="activities">
        <option value="">Extracurricular Activities</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select name="nursery">
        <option value="">Attended Nursery School</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="higher">
        <option value="">Wants Higher Education</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select name="internet">
        <option value="">Internet Access</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <select name="romantic">
        <option value="">In a Romantic Relationship</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input type="number" name="famrel" placeholder="Family Relationship" />
      <input type="number" name="freetime" placeholder="Free Time" />
      <input type="number" name="goout" placeholder="Going Out Frequency" />
      <input type="number" name="health" placeholder="Health Status" />
      <input type="number" name="absences" placeholder="Absences" />
      <input type="number" name="G1" placeholder="Test 1 score" />
      <input type="number" name="G2" placeholder="Test 2 score" />

      <button type="submit">Predict</button>
      <button onClick={handleBack}>Back to Dashboard</button>
    </form>
    
  );
};

export default StudentInput;
