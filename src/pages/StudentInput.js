// import React, { useState } from "react";
// import "./input.css";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const initialState = {
//   school: "",
//   sex: "",
//   age: "",
//   address: "",
//   famsize: "",
//   Pstatus: "",
//   Medu: "",
//   Fedu: "",
//   Mjob: "",
//   Fjob: "",
//   reason: "",
//   guardian: "",
//   traveltime: "",
//   studytime: "",
//   failures: "",
//   schoolsup: "",
//   famsup: "",
//   paid: "",
//   activities: "",
//   nursery: "",
//   higher: "",
//   internet: "",
//   romantic: "",
//   famrel: "",
//   freetime: "",
//   goout: "",
//   health: "",
//   absences: "",
//   G1: "",
//   G2: ""
// };

// const StudentInput = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState(initialState);
  
//   const handleBack = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post(
//             "http://localhost:5000/add-student",
//             formData,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             }
//         );
//         alert("Student data submitted!");
//         setFormData(initialState);
//         navigate('/dashboard');
//     } catch (err) {
//         console.error("Error details:", err);
//         alert("Error submitting data");
//     }
// };
//   return (
//     <form className="student-form" onSubmit={handleSubmit}>
//       <h2>Student Information Form</h2>

//       <select name="school" value={formData.school} onChange={handleChange}>
//         <option value="">Select School</option>
//         <option value="GP">Gabriel Pereira (GP)</option>
//         <option value="MS">Mousinho da Silveira (MS)</option>
//       </select>
//       <select name="sex" value={formData.sex} onChange={handleChange}>
//         <option value="">Select Sex</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//       <input type="number" name="age" placeholder="Age" min="10" max="25" value={formData.age} onChange={handleChange} />
//       <select name="address" value={formData.address} onChange={handleChange}>
//         <option value="">Select Address</option>
//         <option value="U">Urban</option>
//         <option value="R">Rural</option>
//       </select>
//       <select name="famsize" value={formData.famsize} onChange={handleChange}>
//         <option value="">Select Family Size</option>
//         <option value="LE3">Less or equal to 3</option>
//         <option value="GT3">Greater than 3</option>
//       </select>
//       <select name="Pstatus" value={formData.Pstatus} onChange={handleChange}>
//         <option value="">Select Parent Status</option>
//         <option value="T">Together</option>
//         <option value="A">Apart</option>
//       </select>
//       <input type="number" name="Medu" placeholder="Mother's Education" value={formData.Medu} onChange={handleChange} />
//       <input type="number" name="Fedu" placeholder="Father's Education" value={formData.Fedu} onChange={handleChange} />
//       <input type="text" name="Mjob" placeholder="Mother's Job" value={formData.Mjob} onChange={handleChange} />
//       <input type="text" name="Fjob" placeholder="Father's Job" value={formData.Fjob} onChange={handleChange} />
//       <input type="text" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} />
//       <input type="text" name="guardian" placeholder="Guardian" value={formData.guardian} onChange={handleChange} />
//       <input type="number" name="traveltime" placeholder="Travel Time" value={formData.traveltime} onChange={handleChange} />
//       <input type="number" name="studytime" placeholder="Study Time" value={formData.studytime} onChange={handleChange} />
//       <input type="number" name="failures" placeholder="Failures" value={formData.failures} onChange={handleChange} />
//       <select name="schoolsup" value={formData.schoolsup} onChange={handleChange}>
//         <option value="">School Support</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="famsup" value={formData.famsup} onChange={handleChange}>
//         <option value="">Family Support</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="paid" value={formData.paid} onChange={handleChange}>
//         <option value="">Paid Classes</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="activities" value={formData.activities} onChange={handleChange}>
//         <option value="">Extracurricular Activities</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="nursery" value={formData.nursery} onChange={handleChange}>
//         <option value="">Attended Nursery School</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="higher" value={formData.higher} onChange={handleChange}>
//         <option value="">Wants Higher Education</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="internet" value={formData.internet} onChange={handleChange}>
//         <option value="">Internet Access</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <select name="romantic" value={formData.romantic} onChange={handleChange}>
//         <option value="">In a Romantic Relationship</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//       <input type="number" name="famrel" placeholder="Family Relationship" value={formData.famrel} onChange={handleChange} />
//       <input type="number" name="freetime" placeholder="Free Time" value={formData.freetime} onChange={handleChange} />
//       <input type="number" name="goout" placeholder="Going Out Frequency" value={formData.goout} onChange={handleChange} />
//       <input type="number" name="health" placeholder="Health Status" value={formData.health} onChange={handleChange} />
//       <input type="number" name="absences" placeholder="Absences" value={formData.absences} onChange={handleChange} />
//       <input type="number" name="G1" placeholder="Test 1 score" value={formData.G1} onChange={handleChange} />
//       <input type="number" name="G2" placeholder="Test 2 score" value={formData.G2} onChange={handleChange} />

//       <button type="submit">Predict</button>
//       <button onClick={handleBack}>Back to Dashboard</button>
//     </form>
//   );
// };

// export default StudentInput;

import React, { useState } from "react";
import "./input.css";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

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
      // Convert number fields
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
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Student Information Form</h2>

      <select name="school" value={formData.school} onChange={handleChange}>
        <option value="">Select School</option>
        <option value="GP">Gabriel Pereira (GP)</option>
        <option value="MS">Mousinho da Silveira (MS)</option>
      </select>
      <select name="sex" value={formData.sex} onChange={handleChange}>
        <option value="">Select Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input type="number" name="age" placeholder="Age" min="10" max="25" value={formData.age} onChange={handleChange} />
      <select name="address" value={formData.address} onChange={handleChange}>
        <option value="">Select Address</option>
        <option value="U">Urban</option>
        <option value="R">Rural</option>
      </select>
      <select name="famsize" value={formData.famsize} onChange={handleChange}>
        <option value="">Select Family Size</option>
        <option value="LE3">Less or equal to 3</option>
        <option value="GT3">Greater than 3</option>
      </select>
      <select name="Pstatus" value={formData.Pstatus} onChange={handleChange}>
        <option value="">Select Parent Status</option>
        <option value="T">Together</option>
        <option value="A">Apart</option>
      </select>
      <input type="number" name="Medu" placeholder="Mother's Education" value={formData.Medu} onChange={handleChange} />
      <input type="number" name="Fedu" placeholder="Father's Education" value={formData.Fedu} onChange={handleChange} />
      <input type="text" name="Mjob" placeholder="Mother's Job" value={formData.Mjob} onChange={handleChange} />
      <input type="text" name="Fjob" placeholder="Father's Job" value={formData.Fjob} onChange={handleChange} />
      <input type="text" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} />
      <input type="text" name="guardian" placeholder="Guardian" value={formData.guardian} onChange={handleChange} />
      <input type="number" name="traveltime" placeholder="Travel Time" value={formData.traveltime} onChange={handleChange} />
      <input type="number" name="studytime" placeholder="Study Time" value={formData.studytime} onChange={handleChange} />
      <input type="number" name="failures" placeholder="Failures" value={formData.failures} onChange={handleChange} />
      <select name="schoolsup" value={formData.schoolsup} onChange={handleChange}>
        <option value="">School Support</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="famsup" value={formData.famsup} onChange={handleChange}>
        <option value="">Family Support</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="paid" value={formData.paid} onChange={handleChange}>
        <option value="">Paid Classes</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="activities" value={formData.activities} onChange={handleChange}>
        <option value="">Extracurricular Activities</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="nursery" value={formData.nursery} onChange={handleChange}>
        <option value="">Attended Nursery School</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="higher" value={formData.higher} onChange={handleChange}>
        <option value="">Wants Higher Education</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="internet" value={formData.internet} onChange={handleChange}>
        <option value="">Internet Access</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <select name="romantic" value={formData.romantic} onChange={handleChange}>
        <option value="">In a Romantic Relationship</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <input type="number" name="famrel" placeholder="Family Relationship" value={formData.famrel} onChange={handleChange} />
      <input type="number" name="freetime" placeholder="Free Time" value={formData.freetime} onChange={handleChange} />
      <input type="number" name="goout" placeholder="Going Out Frequency" value={formData.goout} onChange={handleChange} />
      <input type="number" name="health" placeholder="Health Status" value={formData.health} onChange={handleChange} />
      <input type="number" name="absences" placeholder="Absences" value={formData.absences} onChange={handleChange} />
      <input type="number" name="G1" placeholder="Test 1 score" value={formData.G1} onChange={handleChange} />
      <input type="number" name="G2" placeholder="Test 2 score" value={formData.G2} onChange={handleChange} />

      <button type="submit">Predict</button>
      <button onClick={handleBack}>Back to Dashboard</button>
    </form>
  );
};

export default StudentInput;
