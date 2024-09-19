// import React, { useState } from 'react';
// import axios from 'axios';

// const PatientForm = () => {
//   const [patientData, setPatientData] = useState({
//     name: '',
//     weight: '',
//     gender: '',
//     age: '',
//     disease: '',
//     doctorId: null, 
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatientData({ ...patientData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
    
//       const response = await axios.post('https://doc-back.onrender.com/patients', patientData);
      
//       console.log('Patient created:', response.data);
     
//     } catch (error) {
//       console.error('Error creating patient:', error);
//     }
//   };

//   return (
//  <center>
//      <div>
//       <h2>Create New Patient</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={patientData.name} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Weight:
//           <input type="text" name="weight" value={patientData.weight} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Gender:
//           <input type="text" name="gender" value={patientData.gender} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Age:
//           <input type="text" name="age" value={patientData.age} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Disease:
//           <input type="text" name="disease" value={patientData.disease} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Doctor ID:
//           <input type="text" name="doctorId" value={patientData.doctorId} onChange={handleChange} required />
//         </label>
//         <br />
//         <button type="submit">Create Patient</button>
//       </form>
//     </div>
//  </center>
//   );
// };

// export default PatientForm;

import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    weight: '',
    gender: '',
    age: '',
    disease: '',
    doctorId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Post request to add the patient
      const response = await axios.post('https://doc-back.onrender.com/patients', patientData);
      
      if (response.status === 201 || response.status === 200) {
        // Show success alert
        alert('Patient details successfully added!');
      
        // Redirect to the patient details page (replace with the correct URL)
        window.location.href = `/patients/${response.data._id}`; // Assuming '_id' is the patient ID in the response
      } else {
        throw new Error('Unexpected response status');
      }
      
    } catch (error) {
      console.error('Error creating patient:', error);
      
      // Check if it's a network error or a server error
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        alert(`Error: ${error.response.data.message || 'Failed to create patient.'}`);
      } else if (error.request) {
        // Request was made but no response received (network error)
        alert('Network error. Please check your connection.');
      } else {
        // Something else happened while setting up the request
        alert('Error adding patient. Please try again.');
      }
    }
  };

  return (
    <center>
      <div>
        <h2>Create New Patient</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={patientData.name} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Weight:
            <input type="text" name="weight" value={patientData.weight} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Gender:
            <input type="text" name="gender" value={patientData.gender} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Age:
            <input type="text" name="age" value={patientData.age} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Disease:
            <input type="text" name="disease" value={patientData.disease} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Doctor ID:
            <input type="text" name="doctorId" value={patientData.doctorId} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Create Patient</button>
        </form>
      </div>
    </center>
  );
};

export default PatientForm;
