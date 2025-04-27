import React from 'react';
import { useNavigate } from 'react-router-dom';


function TeacherInput() {
    return <div>Teacher Input Page</div>;
  }
  export default TeacherInput;
  

//   import { useState } from "react";
// import './input.css'

// export default function StudentInput() {
//   const [formData, setFormData] = useState({});
  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//   };
  
//   return (
//     <div className="bg-gray-50 min-h-screen p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="bg-blue-600 py-6 px-8">
//           <h1 className="text-2xl font-bold text-white">Student Information Form</h1>
//           <p className="text-blue-100 mt-2">Please fill out all the required information</p>
//         </div>
        
//         <form onSubmit={handleSubmit} className="container">
//           {/* Personal Information */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Personal Information
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">School</label>
//                 <input 
//                   type="text" 
//                   name="school" 
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Age</label>
//                 <input 
//                   type="number" 
//                   name="age"
//                   onChange={handleChange} 
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Sex</label>
//                 <select
//                   name="sex"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="M">Male</option>
//                   <option value="F">Female</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <input 
//                   type="text" 
//                   name="address"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Family Information */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Family Information
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Family Size</label>
//                 <select
//                   name="famsize"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="LE3">Less than or equal to 3</option>
//                   <option value="GT3">Greater than 3</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Parents&apos; Status</label>
//                 <select
//                   name="Pstatus"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="T">Together</option>
//                   <option value="A">Apart</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Mother&apos;s Education</label>
//                 <select
//                   name="Medu"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="0">None</option>
//                   <option value="1">Primary (4th grade)</option>
//                   <option value="2">5th to 9th grade</option>
//                   <option value="3">Secondary</option>
//                   <option value="4">Higher</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Father&apos;s Education</label>
//                 <select
//                   name="Fedu"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="0">None</option>
//                   <option value="1">Primary (4th grade)</option>
//                   <option value="2">5th to 9th grade</option>
//                   <option value="3">Secondary</option>
//                   <option value="4">Higher</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Mother&apos;s Job</label>
//                 <select
//                   name="Mjob"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="teacher">Teacher</option>
//                   <option value="health">Healthcare</option>
//                   <option value="services">Services</option>
//                   <option value="at_home">At Home</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Father&apos;s Job</label>
//                 <select
//                   name="Fjob"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="teacher">Teacher</option>
//                   <option value="health">Healthcare</option>
//                   <option value="services">Services</option>
//                   <option value="at_home">At Home</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Guardian</label>
//                 <select
//                   name="guardian"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="mother">Mother</option>
//                   <option value="father">Father</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Family Relationship Quality (1-5)</label>
//                 <input 
//                   type="range" 
//                   name="famrel" 
//                   min="1" 
//                   max="5"
//                   onChange={handleChange}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>1</span>
//                   <span>2</span>
//                   <span>3</span>
//                   <span>4</span>
//                   <span>5</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Academic Information */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Academic Information
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Reason for School Choice</label>
//                 <select
//                   name="reason"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="home">Close to home</option>
//                   <option value="reputation">School reputation</option>
//                   <option value="course">Course preference</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Travel Time (hours)</label>
//                 <select
//                   name="traveltime"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="1">Less than 15 min</option>
//                   <option value="2">15-30 min</option>
//                   <option value="3">30-60 min</option>
//                   <option value="4">More than 60 min</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Study Time (hours/week)</label>
//                 <select
//                   name="studytime"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select</option>
//                   <option value="1">Less than 2 hours</option>
//                   <option value="2">2-5 hours</option>
//                   <option value="3">5-10 hours</option>
//                   <option value="4">More than 10 hours</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Past Failures (count)</label>
//                 <input 
//                   type="number" 
//                   name="failures"
//                   min="0"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">School Support</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="schoolsup" value="yes" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="schoolsup" value="no" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">No</span>
//                   </label>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Family Support</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="famsup" value="yes" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="famsup" value="no" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">No</span>
//                   </label>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Paid Classes</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="paid" value="yes" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="paid" value="no" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">No</span>
//                   </label>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Annual Score</label>
//                 <input 
//                   type="number" 
//                   name="annual_score"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Personal Habits */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//               Personal Activities &amp; Habits
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Extracurricular Activities</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="activities" value="yes" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="activities" value="no" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">No</span>
//                   </label>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Internet Access</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="internet" value="yes" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="internet" value="no" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">No</span>
//                   </label>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Romantic Relationship</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="romantic" value="yes" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="romantic" value="no" onChange={handleChange} className="h-4 w-4 text-blue-600" />
//                     <span className="ml-2 text-sm text-gray-700">No</span>
//                   </label>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Free Time (1-5)</label>
//                 <input 
//                   type="range" 
//                   name="freetime" 
//                   min="1" 
//                   max="5"
//                   onChange={handleChange}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>1</span>
//                   <span>2</span>
//                   <span>3</span>
//                   <span>4</span>
//                   <span>5</span>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Going Out Frequency (1-5)</label>
//                 <input 
//                   type="range" 
//                   name="goout" 
//                   min="1" 
//                   max="5"
//                   onChange={handleChange}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>1</span>
//                   <span>2</span>
//                   <span>3</span>
//                   <span>4</span>
//                   <span>5</span>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Health Status (1-5)</label>
//                 <input 
//                   type="range" 
//                   name="health" 
//                   min="1" 
//                   max="5"
//                   onChange={handleChange}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>1</span>
//                   <span>2</span>
//                   <span>3</span>
//                   <span>4</span>
//                   <span>5</span>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Absences (count)</label>
//                 <input 
//                   type="number" 
//                   name="absences"
//                   min="0"
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-8 flex justify-end space-x-4">
//             <button 
//               type="button" 
//               className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Cancel
//             </button>
//             <button 
//               type="submit" 
//               className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
  